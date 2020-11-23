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
        const main = await fetch("https://icanhazdadjoke.com/");
        const data = await main.json();
        
        console.log(main);
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
        const main = await fetch("https://customapi.aidenwallis.co.uk/api/v1/misc/8ball");
        const data = await main;
        
        console.log(main);
        console.log(data);

        if (!data) {
        return console.log("Error 01: Unable to access the json content of API");
        }

        let content = {
        embed: {
            color: "RANDOM",
            title: "The answer to your question " + question + " is...",
            description: data
        }
        };

        return content;
    }
}

exports.Commands = Commands;
