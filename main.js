const Discord = require('discord.js'); 

const client = new Discord.Client(); //client instance

var fate = 0;
var reply;

client.once('ready', () =>  onClientReady());
function onClientReady()
{
    console.log('Polish Man is Online');
    //listen to messages in channel
    client.on('message', (message) => onMessageReceived(message))
}

function onMessageReceived(message)
{
    fate = Math.random() < 0.9;
    console.log(fate);
    if(message.content.toLowerCase().includes("polish"))
    {
        if(fate)
        {
            reply = "https://www.youtube.com/watch?v=rRPQs_kM_nw";
        }
        else
        {
            reply = "https://www.youtube.com/watch?v=zecnwqXe850";
        }
        message.reply(reply);
    }
}




client.login('NzcxNzIzODgwMDI4NDM4NTc4.X5wR3g.y4EEBjfi8izgWMK04MK6zHT8N5c') // log into bot

