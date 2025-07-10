const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('testeando'),
	async execute(interaction) {
		await interaction.reply('esto es una prueba');
	},
}; 