const { PermissionsBitField, EmbedBuilder, ChannelType } = require("discord.js");
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

        if (interaction.customId === "close") {
            interaction.channel.delete();
        };
    }
};