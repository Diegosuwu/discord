const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meow')
		.setDescription('taco te dice meow'),
	async execute(interaction) {
		await interaction.reply('meow');
	},
}; 
