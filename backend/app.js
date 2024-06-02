import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json())

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})