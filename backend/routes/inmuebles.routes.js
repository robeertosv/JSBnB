import express from 'express'
import { createInmueble, updateInmueble, deleteInmueble } from '../controllers/inmueble.controller.js';

const router = express.Router()

router.post('/create', createInmueble)
router.post('/update', updateInmueble)
router.delete('/delete', deleteInmueble)

export default router;