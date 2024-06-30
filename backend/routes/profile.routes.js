import express from 'express'
import { getUserPic, getAccountType } from '../controllers/profile.controller.js'

const router = express.Router()

router.get('/getUserPic', getUserPic)
router.post('/getAccountType', getAccountType)

export default router