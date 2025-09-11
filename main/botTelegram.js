require('dotenv').config({ path: __dirname + '/.env' });

async function sendMessage(chatId, message) {
    try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });

        const data = await res.json();
        if (!data.ok) {
            console.error("TELEGRAM: Errore:", data);
        }
        return data;
    } catch (err) {
        console.error("TELEGRAM: Errore di rete:", err);
    }
}


function brodcastError(chatId, error) {
    const message = `❌Errore❌\n${error.message}\n\n🌐Info🌐\n${error.stack}`;
    console.log(error);
    sendMessage(chatId, message);
}



console.log("Bot Telegram avviato");
module.exports = {
    sendMessage,
    brodcastError
}

