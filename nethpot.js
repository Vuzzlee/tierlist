const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const config = require('../../../config.json');

module.exports = {
    name: "nethpot",
    description: "Nethpot",
    options: [
        {
            name: "yeni-tier",
            description: "Yeni tier",
            type: 3,
            required: true
        },
        {
            name: "oyun-içi-isim",
            description: "Oyun içi isim",
            type: 3,
            required: true
        },
        {
            name: "discord-isim",
            description: "Discord ismi",
            type: 6,
            required: true
        },
        {
            name: "tester",
            description: "Tester",
            type: 6,
            required: true
        },
        {
            name: "sonuçlar",
            description: "Sonuçlar",
            type: 3,
            required: true
        },
    ],
    /**
     * @param {import("discord.js").Interaction} interaction
     * @param {import("discord.js").Client} client
     */
    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.find((role) => role.id === config.staff_role.nethpot)) return interaction.reply({ embeds: [new EmbedBuilder().setColor("Red").setDescription("Bunu yapmak için yeterli yetkiye sahip değilsin.")], ephemeral: true })

        const yeni_tier = interaction.options.getString('yeni-tier')
        const oyun_ici_isim = interaction.options.getString('oyun-içi-isim')
        const discord_isim = interaction.options.getMember('discord-isim')
        const tester = interaction.options.getMember('tester')
        const sonuclar = interaction.options.getString('sonuçlar')

        if (yeni_tier.toLowerCase() === 'lt1') {
            discord_isim.roles.remove(config.nethpot.highnethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.add(config.nethpot.t1nethpot);
        }

        if (yeni_tier.toLowerCase() === 'lt2') {
            discord_isim.roles.remove(config.nethpot.highnethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.add(config.nethpot.t2nethpot);
        }

        if (yeni_tier.toLowerCase() === 'lt3') {
            discord_isim.roles.remove(config.nethpot.highnethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.add(config.nethpot.t3nethpot);
        }

        if (yeni_tier.toLowerCase() === 'lt4') {
            discord_isim.roles.remove(config.nethpot.highnethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.add(config.nethpot.t4nethpot);
        }

        if (yeni_tier.toLowerCase() === 'lt5') {
            discord_isim.roles.remove(config.nethpot.highnethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.add(config.nethpot.t5nethpot);
        }

        if (yeni_tier.toLowerCase() === 'ht1') {
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.add(config.nethpot.highnethpot);
            discord_isim.roles.add(config.nethpot.t1nethpot);
        }

        if (yeni_tier.toLowerCase() === 'ht2') {
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.add(config.nethpot.highnethpot);
            discord_isim.roles.add(config.nethpot.t2nethpot);
        }

        if (yeni_tier.toLowerCase() === 'ht3') {
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.add(config.nethpot.highnethpot);
            discord_isim.roles.add(config.nethpot.t3nethpot);
        }

        if (yeni_tier.toLowerCase() === 'ht4') {
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t5nethpot);
            discord_isim.roles.add(config.nethpot.highnethpot);
            discord_isim.roles.add(config.nethpot.t4nethpot);
        }

        if (yeni_tier.toLowerCase() === 'ht5') {
            discord_isim.roles.remove(config.nethpot.t1nethpot);
            discord_isim.roles.remove(config.nethpot.t2nethpot);
            discord_isim.roles.remove(config.nethpot.t3nethpot);
            discord_isim.roles.remove(config.nethpot.t4nethpot);
            discord_isim.roles.add(config.nethpot.highnethpot);
            discord_isim.roles.add(config.nethpot.t5nethpot);
        }

        interaction.reply({ embeds: [new EmbedBuilder().setColor("Green").setDescription("Tier List sonuçları başarıyla gönderildi!")], ephemeral: true })
        return client.channels.cache.get(config.channels.nethpot).send({ embeds: [new EmbedBuilder().setColor("#2b0101").setAuthor({ name: 'Tier List' }).setTitle("Nethpot Sonuçları").setThumbnail(interaction.guild.iconURL()).setDescription(`・**Tester**: ${tester} / ${tester.user.username}\n・**Discord isim**: ${discord_isim} / ${discord_isim.user.username}\n・**Oyun içi isim**: ${oyun_ici_isim}\n・**Yeni Tier**: ${yeni_tier}\n・**Eski Tier**: ${discord_isim.roles.cache.has(config.nethpot.t5nethpot) ? 'LT5' : '-'}\n・**Sonuçlar**: ${sonuclar}`).setFooter({ text: '1.9+ Tier List' })] })
    }
}