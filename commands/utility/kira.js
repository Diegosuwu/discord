const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sistervideo')
    .setDescription('kira screamer'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('kira yoshikage')
      .setImage('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDA1Nnp0eTA4M3ZpaXJ5ZTZ2dDd2bHhsbG52MXR1N2prbW5nd2xxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QxQTfJQ7Eyic7vwRHK/giphy.gif')
      .setColor(0x00AE86);

    await interaction.reply({ embeds: [embed] });
  }
};
