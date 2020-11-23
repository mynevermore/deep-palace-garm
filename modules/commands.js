const Discord = require('discord.js');
const fetch = require("node-fetch");

class Commands {
    async getMeme() {
        const main = await fetch("https://no-api-key.com/api/v1/memes");
        const data = await main.json();

        if (!data) {
        return console.log("Error 01: Unable to access the json content of API");
        }

        let content = {
        embed: {
            color: "RANDOM",
            title: "Here's a meme",
            image: { url: data.image }
        }
        };

        return content;
    }

    async getQuote() {
        const main = await fetch("https://no-api-key.com/api/v1/memes");
        const data = await main.json();

        if (!data) {
        return console.log("Error 01: Unable to access the json content of API");
        }

        let content = {
        embed: {
            color: "RANDOM",
            title: "Here's a meme",
            image: { url: data.image }
        }
        };

        return content;
    }

    async getFact() {
        const main = await fetch("https://no-api-key.com/api/v1/memes");
        const data = await main.json();

        if (!data) {
        return console.log("Error 01: Unable to access the json content of API");
        }

        let content = {
        embed: {
            color: "RANDOM",
            title: "Here's a meme",
            image: { url: data.image }
        }
        };

        return content;
    }

    async getJoke() {
        var header = {
            Accept: 'application/json'
        }
        
        const main = await fetch("https://icanhazdadjoke.com/", method: 'GET', headers: header);
        console.log(main);
        const data = await main.json();
        console.log(data);

        if (!data) {
        return console.log("Error 01: Unable to access the json content of API");
        }

        let content = {
        embed: {
            color: "RANDOM",
            title: "Dad joke time!",
            description: data.joke
        }
        };

        return content;
    }

    async get8Ball(question) {
        const responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."];
        const data = responses[Math.floor(Math.random() * responses.length)];

        let content = {
        embed: {
            color: "RANDOM",
            title: 'The Magic 8 Ball has the answer',
            "fields": [
                  {
                    "name": "Your Question",
                    "value": question
                  },
                  {
                    "name": "Your Answer",
                    "value": data
                  },
        }
        };

        return content;
    }
}

exports.Commands = Commands;
