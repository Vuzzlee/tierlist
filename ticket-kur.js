const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionsBitField, ButtonBuilder, ButtonStyle } = require("discord.js");
const { message } = require("../../../config.json");

module.exports = {
    name: "ticket-kur",
    description: "Ticket sisteini kurarsınız!",
    /**
     * @param {import("discord.js").Interaction} interaction
     * @param {import("discord.js").Client} client
     */
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Red")
                    .setDescription("Yetkin yetersiz!")
            ],
            ephemeral: true
        });

        const embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription("Destek sistemi başarıyla kuruldu!")
        const ticketEmbed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`Tier List`)
            .setDescription(message.destek_sistemi_mesaji)
            .setImage(interaction.guild.iconURL())
        const btn1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Nethpot")
                    .setCustomId("nethpot")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel("Gapple")
                    .setCustomId("gapple")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel("Beast")
                    .setCustomId("beast")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel("Shield")
                    .setCustomId("shield")
                    .setStyle(ButtonStyle.Secondary)
            )
        const btn2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Crystal")
                    .setCustomId("crystal")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel("Smp")
                    .setCustomId("smp")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel("Diapot")
                    .setCustomId("diapot")
                    .setStyle(ButtonStyle.Secondary),
            )

        interaction.reply({ embeds: [embed], ephemeral: true });
        interaction.channel.send({ embeds: [ticketEmbed], components: [btn1, btn2] });
    }
}