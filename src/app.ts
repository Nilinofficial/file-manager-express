import express from 'express';
import type { Express } from 'express';
import cors from 'cors'

const app: Express = express();

app.use(express.json());


// fix cors issue

// enabled routes 
const origin = "http:localhost:5173"

app.use(cors({
    origin: origin,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
}))

import folderRouter from "./routes/folder.routes.js"
import errorMiddleware from './middleware/error.middleware.js';

app.use("/folder", folderRouter)


app.use(errorMiddleware);


export default app