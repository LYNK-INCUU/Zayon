// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Boop <@!${context.params.event.author.id}>!`,
    `Ayy you're cute!`
  ].join('\n'),
  embed: {
    title: 'Guild Information',
    type: 'rich',
    color: 0x00AA00, // Green color
    description: 'Currently Under Development, Tough i possess the power of anime!',
    fields: [{
      name: 'Anime Search',
      value: [
        '!Anime: Calls info about that anime.',
        ''
      ].join('\n')
    }, {
      name: 'Help. (not implemented yet)',
      value: [
        'If you cant find a feature, please ask for help. I`ll show you around!',
        'ZN/Help'
      ].join('\n')
    }]
  },
  tts: false
});

return messageResponse;
