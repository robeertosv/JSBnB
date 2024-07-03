import express from 'express'
import { getUser, getInmueblesPreview, getInmueble} from '../db/searchEngine.js'

const router = express.Router()

router.post('/getUser', getUser)
router.post('/getInmueblesPreview', getInmueblesPreview)
router.post('/getInmueble', getInmueble)

export default router;