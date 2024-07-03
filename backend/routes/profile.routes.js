import express from 'express'
import { getUserPic, getAccountType, getUserById } from '../controllers/profile.controller.js'

const router = express.Router()

router.post('/getUserPic', getUserPic)
router.post('/getAccountType', getAccountType)
router.post('/getUserById', getUserById)
export default router