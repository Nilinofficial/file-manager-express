import dotenv from 'dotenv';

import connectDB from './db/index.js';
import app from './app.js'

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 2000;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log("Listening to Port", PORT);

    })

}

startServer()