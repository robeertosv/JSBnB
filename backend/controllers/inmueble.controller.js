import express from 'express'
import Inmueble from '../models/inmueble.model.js';

export const createInmueble = async (req, res) => {
    try {
        const { title, address, data, esApartamento, price, services, photo } = req.body;

        const newInmueble = new Inmueble({ title, address, data, esApartamento, price, services, photo })

        await newInmueble.save()

        return res.status(201).json({ code: 'ok' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const updateInmueble = async (req, res) => {
    try {
        const { id, title, address, data, esApartamento, price, services, photo } = req.body;

        const inmueble = await Inmueble.findById(id)

        if(!inmueble) return res.status(404).json({ error: "No se encontró ese inmueble" })

        await Inmueble.updateOne({ _id: id }, { title, address, data, esApartamento, price, services, photo })

        return res.status(200).json({ code: 'ok' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const deleteInmueble = async (req, res) => {
    try {
        const { id, title, address, data, esApartamento, price, services, photo } = req.body;

        const inmueble = await Inmueble.findById(id)

        if(!inmueble) return res.status(404).json({ error: "No se encontró ese inmueble" })

        await Inmueble.deleteOne({ _id: id })

        return res.status(200).json({ code: 'ok' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}