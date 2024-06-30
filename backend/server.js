import express from 'express';
import { configDotenv } from 'dotenv';
import path from 'path'
import { Server } from 'socket.io';
import connectDB from './db/connectMongo.js';
import { createServer } from 'http';
import cors from 'cors'

import profileRoutes from './routes/profile.routes.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser';

configDotenv();

const app = express();
const server = createServer(app);
const io = new Server(server)
const PORT = process.env.PORT;
const __dirname = path.resolve();

const corsConfig = {
    origin: '*',
    optionSuccessStatus: 200   
}

app.use(express.json())
app.use(cors(corsConfig))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.use('/api/profile', profileRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {})
server.listen(PORT, () => {
    connectDB();
    console.log(`http://localhost:${PORT}`)
})