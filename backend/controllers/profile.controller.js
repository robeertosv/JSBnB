import express from 'express'
import User from '../models/user.model.js'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getUserPic = (req, res) => {
    const { file } = req.body

    const imagePath = path.join(__dirname, `../uploads/profiles/${file}`) // Asegúrate de tener la carpeta y el archivo

    // Verifica si el archivo existe
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(err)
            return res.status(404).send('Imagen no encontrada')
        }
        // Establece el tipo de contenido y envía el archivo
        res.type('jpg')
        return res.status(200).sendFile(imagePath)
    })


}

export const getAccountType = async (req, res) => {
    const { uid } = req.body

    try {
        let user = await User.findById(uid)

        if (user) {
            return res.json({ type: user.accountType })

        } else {
            return res.status(404).json({ error: "No se encontró al usuario" })
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const { UID } = req.body;

        const user = await User.findById(UID).exec()

        if (!user) return res.status(404).json({ error: "No se encontró a ese usuario: "+UID })


        return res.status(200).json({ user })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}