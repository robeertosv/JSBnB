import express from 'express'
import { getUserPic, getAccountType } from '../controllers/profile.controller.js'

const router = express.Router()

router.post('/getUserPic', getUserPic)
router.post('/getAccountType', getAccountType)

export default router