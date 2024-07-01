import express from 'express'
import multer from 'multer'
import path from 'path'
import { createInmueble, updateInmueble, deleteInmueble } from '../controllers/inmueble.controller.js';

const router = express.Router()
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Define el destino de los archivos subidos
    },
    filename: function(req, file, cb) {
        // Genera un nombre de archivo único con la fecha actual y la extensión original del archivo
        cb(null, `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage })

router.post('/create', upload.single('photo') ,createInmueble)
router.post('/update', updateInmueble)
router.delete('/delete', deleteInmueble)

export default router;