import express from 'express'
import { getUserPic } from '../controllers/profile.controller.js'

const router = express.Router()

router.get('/getUserPic', getUserPic)

export default router