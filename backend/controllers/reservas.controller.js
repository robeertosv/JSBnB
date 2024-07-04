import express from 'express'
import Reserva from '../models/reserva.model.js'

export const createReserva = async (req, res) => {
    try {
        const { fechaEntrada, fechaSalida, personas, inmuebleID, loggedUser } = req.body;
        const userID = loggedUser

        const reserva = new Reserva({inmuebleID, userID, fechaEntrada, fechaSalida, personas})
        await reserva.save()

        if(!reserva) return res.status(400).json({ error: "No se ha podido crear la reserva" })

        return res.status(200).json({ message: 'OK' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
} 