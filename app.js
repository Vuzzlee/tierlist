const { Client, GatewayIntentBits, Collection, EmbedBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');
const config = require('../config.json');
const db = require('croxydb');
const chalk = require('chalk');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions
    ]
});

client.commands = new Collection();

// Bot hazır olduğunda
client.once('ready', () => {
    console.log(chalk.green(`✅ Bot aktif: ${client.user.tag}`));
    console.log(chalk.blue(`📊 ${client.guilds.cache.size} sunucuda aktif`));
    
    // Bot durumunu ayarla
    client.user.setActivity(process.env.BOT_STATUS || 'Tierlist', { type: 'PLAYING' });
});

// Ticket sistemi için mesaj işleme
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    
    // Ticket kanalında mesaj kontrolü
    if (message.channel.id === config.ticket_kategori) {
        // Test talebi işleme
        await handleTestRequest(message);
    }
});

// Test talebi işleme fonksiyonu
async function handleTestRequest(message) {
    try {
        const embed = new EmbedBuilder()
            .setTitle('🎟️ Test Talebi')
            .setDescription(config.message.destek_sistemi_mesaji)
            .setColor('#00ff00')
            .setFooter({ text: 'Sairon Network' })
            .setTimestamp();
        
        await message.reply({ embeds: [embed] });
    } catch (error) {
        console.error(chalk.red('Test talebi işlenirken hata:', error));
    }
}

// Tier rol yönetimi
function getTierRole(category, tier) {
    const tierMap = {
        't5': 't5' + category,
        't4': 't4' + category,
        't3': 't3' + category,
        't2': 't2' + category,
        't1': 't1' + category,
        'high': 'high' + category
    };
    
    return config[category]?.[tierMap[tier]];
}

// Rol verme fonksiyonu
async function assignTierRole(member, category, tier) {
    try {
        const roleId = getTierRole(category, tier);
        if (!roleId) return false;
        
        const role = member.guild.roles.cache.get(roleId);
        if (!role) return false;
        
        await member.roles.add(role);
        console.log(chalk.green(`✅ ${member.user.tag} kullanıcısına ${role.name} rolü verildi`));
        return true;
    } catch (error) {
        console.error(chalk.red('Rol verme hatası:', error));
        return false;
    }
}

// Slash komutları için hazırlık
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    const { commandName } = interaction;
    
    switch (commandName) {
        case 'tier':
            await handleTierCommand(interaction);
            break;
        case 'test':
            await handleTestCommand(interaction);
            break;
        default:
            break;
    }
});

// Tier komutu
async function handleTierCommand(interaction) {
    const category = interaction.options.getString('kategori');
    const tier = interaction.options.getString('tier');
    const user = interaction.options.getUser('kullanici') || interaction.user;
    
    try {
        const member = await interaction.guild.members.fetch(user.id);
        const success = await assignTierRole(member, category, tier);
        
        if (success) {
            const embed = new EmbedBuilder()
                .setTitle('✅ Tier Rol Verildi')
                .setDescription(`${user} kullanıcısına **${tier.toUpperCase()} ${category.toUpperCase()}** rolü verildi!`)
                .setColor('#00ff00')
                .setTimestamp();
            
            await interaction.reply({ embeds: [embed] });
        } else {
            await interaction.reply({ content: '❌ Rol verilemedi! Lütfen kategori ve tier bilgilerini kontrol edin.', ephemeral: true });
        }
    } catch (error) {
        console.error(chalk.red('Tier komut hatası:', error));
        await interaction.reply({ content: '❌ Bir hata oluştu!', ephemeral: true });
    }
}

// Test komutu
async function handleTestCommand(interaction) {
    const embed = new EmbedBuilder()
        .setTitle('🎮 Test Sistemi')
        .setDescription(config.message.destek_sistemi_mesaji)
        .setColor('#0099ff')
        .addFields(
            { name: '📋 Kategoriler', value: 'NethPot, Beast, Crystal, DiaPot, SMP, Shield, Gapple', inline: true },
            { name: '🏆 Tier Seviyeleri', value: 'T5, T4, T3, T2, T1, High', inline: true }
        )
        .setFooter({ text: 'Sairon Network Test Sistemi' })
        .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
}

// Hata yakalama
process.on('unhandledRejection', error => {
    console.error(chalk.red('Yakalanmamış Promise Hatası:', error));
});

process.on('uncaughtException', error => {
    console.error(chalk.red('Yakalanmamış Exception:', error));
    process.exit(1);
});

// Botu başlat
client.login(process.env.TOKEN).catch(error => {
    console.error(chalk.red('Bot giriş hatası:', error));
});