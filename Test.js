const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  const guild = client.guilds.cache.get('your-guild-id');
  const textChannel = guild.createTextChannel('text-channel-name', {
    topic: 'text-channel-topic',
    position: 0,
    rateLimitPerUser: 5,
  });

  const voiceChannel = guild.createVoiceChannel('voice-channel-name', {
    topic: 'voice-channel-topic',
    position: 1,
    userLimit: 10,
    bitrate: 64000,
    region: 'us-west',
    parent: 'category-id',
    permissionOverwrites: [
      {
        id: 'user-id',
        type: 'member',
        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
      },
      {
        id: 'role-id',
        type: 'role',
        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
      },
    ],
  });
});

client.login('your-bot-token');
