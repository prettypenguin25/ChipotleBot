const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = "C!"
bot.login('NDc0NzI1ODExMjg3NDkwNTYx.Dm4OcA.XntAyxiaxhYkdV5hnYx5F2laPv8')

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}



bot.on("ready", function() {
    console.log("Ready")
})

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").send(member.toString() + " Welcome!")

    member.addRole(member.guild.roles.find("name", "Penguin"))

    member.guild.createRole({
        name: member.user.username,
        color: generateHex().
        permissions, 
    }),then(function(role) {
        member.addRole(role)
    })
})






bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return

    if (!message.content.startsWith(PREFIX)) return

    var args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send("Pong!")
            break
        case "info":
            message.channel.send("I'm a super awesome great 'dope' bot created by prettypenguin25!")
            break
        case "trainings":
            message.channel.send("@here **TRAININGS** \ Trainings are starting soon! Come on down to the Training Center for a possible promotion! https://www.roblox.com/games/1253772714/Chipotle-Training-Center")
            break
        case "interviews":
            message.channel.send("@here **INTERVIEWS** \ Interviews are starting soon! Customers, come on down to the Interview Center for a possible spot on teh Chipotle Staff Team! https://www.roblox.com/games/756979154/Chipotle-Interview-Centre")
            break
        case "help":
            var embed1 = new Discord.RichEmbed()
                .setDescription("**COMMAND HELP IS IN PROGRESS**")
            message.channel.send(embed1)
            break
        case "shift":
            message.channel.send("@here **SHIFT** \ a shift is being hosted right now at the cafe! Come on down! https://www.roblox.com/games/976820361/Chipotle-V7-Restaurant")
            break
        case "How do I get a job here?":
            message.channel.send("You can get a job here by attending interviews, or applying at the application center! https://www.roblox.com/games/1574887739/Chipotle-Application-Center-NEW")
            break
        default:
            message.channel.send("Invalid command!")
    }
})
