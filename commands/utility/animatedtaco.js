const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tacovideo')
    .setDescription('video sorpresa'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('comparte este gif de taco o tendrás 7 años de mala suerte')
      .setImage('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnRpanBveTdoN3d5dWU2a2JsbHlyZDdwd3VraGRyMW1yNnZkZXM3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wDddbA476x9KeM5Sio/giphy.gif')
      .setColor(0x00AE86);

    await interaction.reply({ embeds: [embed] });
  }
};
