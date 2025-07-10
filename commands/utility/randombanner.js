const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('banner')
    .setDescription('random banner'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('comparte este gif de taco o tendrás 7 años de mala suerte')
      .setImage('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenNjbmQ5dTJxN3B0eDJkYmk4YjFubHhweGZmZTNleXRzNDVpcHJxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yrBwdH8CD7K5q/giphy.gif')
      .setColor(0x00AE86);

    await interaction.reply({ embeds: [embed] });
  }
};
