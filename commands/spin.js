const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

const prize = ["", "", "", "", "", "", "", "", "", "", ""];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("spin")
        .setDescription("لف عجلة الحظ"),
    async execute(client, interaction) {
        if (interaction.member.roles.cache.some(role => role.id === "ايدي الرتبة")){

            const prizes = prize[Math.floor(Math.random() * prize.length)];
        await interaction.reply({ content: `**لقد ربحت : ${prizes}**`})
            
        } else {
interaction.reply({ content: "**:x: you don't have any permissions for type commands**"});
}
    }
};
