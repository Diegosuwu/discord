const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('te doy info del server'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`El server es: ${interaction.guild.name} y tiene ${interaction.guild.memberCount} cachorritos :3`);
	},
};