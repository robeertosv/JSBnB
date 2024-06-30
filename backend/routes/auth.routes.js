import express from 'express'
import { validateAuth, login, register, logout, deleteAccount } from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.post('/validateAuth', validateAuth)
router.get('/logout', logout)
router.delete('deleteAccount', deleteAccount)

export default router;