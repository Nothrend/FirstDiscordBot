module.exports = {
    name: 'help',
    description: "This is the help command, meant to let the user know of bot functions",
    execute(message, args) {
        if (message.author.username === 'NothrendFP') {
            message.channel.send('Sorry don\'t do anything yet m8');
        } else {
            message.channel.send('Sorry don\'t do anything yet ' + message.author.username);
        }
    }
}