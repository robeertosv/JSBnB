import express from 'express';
import { configDotenv } from 'dotenv';
import path from 'path'
import { Server } from 'socket.io';
import { createServer } from 'http';

configDotenv();

const app = express();
const server = createServer(app);
const io = new Server(server)
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json())

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})