const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

const prefix = '~';
var botLogin = " ";

// Get login for bot

try {
    var file = fs.readFileSync('botLogin.txt');
    botLogin = file.toString();
} catch (e) {
    console.log('Error' , e.stack);
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is on!');

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        client.commands.get('help').execute(message,args);
    }

})



// This must be last line of file
client.login(botLogin);