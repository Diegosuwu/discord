const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`El comando ${interaction.commandName} no fue encontrado`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Error', flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: 'Error', flags: MessageFlags.Ephemeral });
			}
		}
	},
};
