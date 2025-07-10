const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wilsonvideo')
    .setDescription('orange'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('naranjoso')
      .setImage('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzJkaWV1MGNxc2cxdjd0Z3B1d3dsbjV2aHlqdTR2eWwwbXEyeHdlaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LMu7zYcyKqqUQqbipW/giphy.gif') // agregar gif
      .setColor(0x00AE86);

    await interaction.reply({ embeds: [embed] });
  }
};
