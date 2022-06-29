exports.run =  async(client, message, args) => {
    const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}... try again ? ❌`);

        await queue.back();

        message.channel.send(`Playing the **previous** track ✅`);
    }

    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["previous","b"],
        permLevel: "User",
        voiceChannel: "true"
      };
      
      exports.help = {
        name: "back",
        category: "Music",
        description: "Play previous music",
        usage: "back"
      };
