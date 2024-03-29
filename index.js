const Discord = require("discord.js")

const TOKEN = ""
const prefix = "-"
const fs = require("fs")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log(`Logged in as => ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return

    const args = message.content.slice(prefix.length).split(/ +/)
    const params = message.content.split('--params:')[1]
    const command = args.shift().toLowerCase()
    
    // const teste = params.split('?')
    // teste.forEach(element => {
    //     console.log(element)
    // });

    console.log('message => ' + message.content)
    console.log('command => ' + command)
    console.log('params => ' + params)



    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args)
            break;
    
        case 'emb':
            client.commands.get('emb').execute(message, params, args)
            break;
        default:
            break;
    }

    
    //const selectedChannel = client.channels.cache.find(channel => channel.name === 'drift')
    //message.selectedChannel.send('oi')
    //console.log(client.channels.cache)
})

client.login(TOKEN)