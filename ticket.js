const { PermissionsBitField, EmbedBuilder, ChannelType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");
const { staff_role, ticket_kategori } = require("../../../config.json");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {import("discord.js").Interaction} interaction 
     * @param {import("discord.js").Client} client
     */
    run: async (client, interaction) => {
        if (!interaction.isButton()) return;
        const { Flags } = PermissionsBitField;

        function start(paramater) {
            const modal = new ModalBuilder()
                .setCustomId("modal")
                .setTitle(paramater)
            const name = new TextInputBuilder()
                .setCustomId("name")
                .setLabel("Oyun içi isminiz")
                .setMaxLength(50)
                .setPlaceholder("Oyun içi isminizi buraya giriniz!")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true)
            const tier = new TextInputBuilder()
                .setCustomId("tier")
                .setLabel("Tier")
                .setMaxLength(500)
                .setPlaceholder("Tier'inizi yazınız!")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true)

            modal.addComponents([
                new ActionRowBuilder().addComponents(name),
                new ActionRowBuilder().addComponents(tier)
            ])
            interaction.showModal(modal)

            module.exports = { paramater };
        };

        const value = interaction.customId;

        if (value === "nethpot") {
            start("Nethpot");
            // ticket(staff_role.nethpot, "Nethpot destek talebi oluşturuldu!", "nethpot");

            return;
        };

        if (value === "gapple") {
            start("Gapple");

            return;
        };

        if (value === "beast") {
            start("Beast");

            return;
        };

        if (value === "shield") {
            start("Shield");

            return;
        };

        if (value === "crystal") {
            start("Crystal")

            return;
        };

        if (value === "smp") {
            start("Smp");

            return;
        };

        if (value === "diapot") {
            start("Diapot");

            return;
        };
    }
};