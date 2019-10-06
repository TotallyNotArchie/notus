const { RichEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "Returns server information",
    run: async (client, message, args) => {
        let sicon = message.guild.iconURL;
        let embed = new RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);
    
        message.channel.send(embed);
    }
}
