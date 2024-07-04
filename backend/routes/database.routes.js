import express from 'express'
import { getUser, getInmueblesPreview, getInmueble, getPhoto} from '../db/searchEngine.js'

const router = express.Router()

router.post('/getUser', getUser)
router.post('/getInmueblesPreview', getInmueblesPreview)
router.post('/getInmueble', getInmueble)
router.post('/getPhoto', getPhoto)

export default router;