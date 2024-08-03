const TelegramBot = require('node-telegram-bot-api');

const token = '7003430591:AAE7TInKj5chif5oDmG0LhhOvgWTx7mU78M';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Salom! Biror so\'zni yozing, men uni 3 ta qilaman.');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text.startsWith('/')) { 
        const repeatedText = text+' '+text+' '+text;
        bot.sendMessage(chatId, repeatedText);
    }
});