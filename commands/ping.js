module.exports = {
    name: 'ping',
    description: 'Simple ping',
    execute(message, args){
        message.reply("pong")
    }
}