import express from 'express'

import { createReserva } from '../controllers/reservas.controller.js';

const router = express.Router() 

router.post('/create', createReserva)

export default router;