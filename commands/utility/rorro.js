const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rorrovideo')
    .setDescription('YUCATAN MAFIA BOSS L9 DRAVEN PLAYER'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('YUCATAN MAFIA BOSS L9 DRAVEN PLAYER')
      .setImage('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTNwdWk5MzJzeWg1NzAyOWZmYnUyZ2Ixc290cmhnZWVrMW9pbWVlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v0u7LfVEpFi1TtbDYi/giphy.gif') // agregar gif
      .setColor(0x00AE86);

    await interaction.reply({ embeds: [embed] });
  }
};
