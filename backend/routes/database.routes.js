import express from 'express'
import { getUser, getInmueblesPreview} from '../db/searchEngine.js'

const router = express.Router()

router.post('/getUser', getUser)
router.post('/getInmueblesPreview', getInmueblesPreview)

export default router;