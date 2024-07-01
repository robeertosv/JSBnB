import express from 'express'
import Inmueble from '../models/inmueble.model.js';

export const createInmueble = async (req, res) => {
    try {
        // Los campos de texto estarán disponibles en req.body
        const { ownerId, title, address, description, maxPeople, esApartamento, price, services } = req.body;
        // El archivo de imagen estará disponible en req.file
        const photo = req.file ? req.file.path : ''; // Guarda la ruta del archivo si existe

        const newInmueble = new Inmueble({ ownerId, title, address, description, maxPeople, esApartamento, price, services, photo });

        await newInmueble.save();

        return res.status(201).json({ code: 'ok' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const updateInmueble = async (req, res) => {
    try {
        const { id, title, address, description, maxPeople, esApartamento, price, services, photo } = req.body;

        const inmueble = await Inmueble.findById(id)

        if(!inmueble) return res.status(404).json({ error: "No se encontró ese inmueble" })

        await Inmueble.updateOne({ _id: id }, { title, address, description, maxPeople, esApartamento, price, services, photo })

        return res.status(200).json({ code: 'ok' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const deleteInmueble = async (req, res) => {
    try {
        const { id, title, address, description, maxPeople, esApartamento, price, services, photo } = req.body;

        const inmueble = await Inmueble.findById(id)

        if(!inmueble) return res.status(404).json({ error: "No se encontró ese inmueble" })

        await Inmueble.deleteOne({ _id: id })

        return res.status(200).json({ code: 'ok' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}