const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const config = require('../../../config.json');

module.exports = {
    name: "crystal",
    description: "Crystal",
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
        if (!interaction.member.roles.cache.find((role) => role.id === config.staff_role.crystal)) return interaction.reply({ embeds: [new EmbedBuilder().setColor("Red").setDescription("Bunu yapmak için yeterli yetkiye sahip değilsin.")], ephemeral: true })

        const yeni_tier = interaction.options.getString('yeni-tier')
        const oyun_ici_isim = interaction.options.getString('oyun-içi-isim')
        const discord_isim = interaction.options.getMember('discord-isim')
        const tester = interaction.options.getMember('tester')
        const sonuclar = interaction.options.getString('sonuçlar')

        if (yeni_tier.toLowerCase() === 'lt1') {
            discord_isim.roles.remove(config.crystal.highcrystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.add(config.crystal.t1crystal);
        }

        if (yeni_tier.toLowerCase() === 'lt2') {
            discord_isim.roles.remove(config.crystal.highcrystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.add(config.crystal.t2crystal);
        }

        if (yeni_tier.toLowerCase() === 'lt3') {
            discord_isim.roles.remove(config.crystal.highcrystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.add(config.crystal.t3crystal);
        }

        if (yeni_tier.toLowerCase() === 'lt4') {
            discord_isim.roles.remove(config.crystal.highcrystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.add(config.crystal.t4crystal);
        }

        if (yeni_tier.toLowerCase() === 'lt5') {
            discord_isim.roles.remove(config.crystal.highcrystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.add(config.crystal.t5crystal);
        }

        if (yeni_tier.toLowerCase() === 'ht1') {
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.add(config.crystal.highcrystal);
            discord_isim.roles.add(config.crystal.t1crystal);
        }

        if (yeni_tier.toLowerCase() === 'ht2') {
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.add(config.crystal.highcrystal);
            discord_isim.roles.add(config.crystal.t2crystal);
        }

        if (yeni_tier.toLowerCase() === 'ht3') {
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.add(config.crystal.highcrystal);
            discord_isim.roles.add(config.crystal.t3crystal);
        }

        if (yeni_tier.toLowerCase() === 'ht4') {
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t5crystal);
            discord_isim.roles.add(config.crystal.highcrystal);
            discord_isim.roles.add(config.crystal.t4crystal);
        }

        if (yeni_tier.toLowerCase() === 'ht5') {
            discord_isim.roles.remove(config.crystal.t1crystal);
            discord_isim.roles.remove(config.crystal.t2crystal);
            discord_isim.roles.remove(config.crystal.t3crystal);
            discord_isim.roles.remove(config.crystal.t4crystal);
            discord_isim.roles.add(config.crystal.highcrystal);
            discord_isim.roles.add(config.crystal.t5crystal);
        }

        interaction.reply({ embeds: [new EmbedBuilder().setColor("Green").setDescription("Tier List sonuçları başarıyla gönderildi!")], ephemeral: true })
        return client.channels.cache.get(config.channels.crystal).send({ embeds: [new EmbedBuilder().setColor("#FFCBDB").setAuthor({ name: 'Tier List' }).setTitle("Crystal Sonuçları").setThumbnail(interaction.guild.iconURL()).setDescription(`・**Tester**: ${tester} / ${tester.user.username}\n・**Discord isim**: ${discord_isim} / ${discord_isim.user.username}\n・**Oyun içi isim**: ${oyun_ici_isim}\n・**Yeni Tier**: ${yeni_tier}\n・**Eski Tier**: ${discord_isim.roles.cache.has(config.crystal.t5crystal) ? 'LT5' : '-'}\n・**Sonuçlar**: ${sonuclar}`).setFooter({ text: '1.9+ Tier List' })] })
    }
}