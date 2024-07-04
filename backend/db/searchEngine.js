import express from 'express'
import User from '../models/user.model.js'
import Inmueble from '../models/inmueble.model.js'
import path from 'path'

const __dirname = path.resolve();
// Get user info by username
export const getUser = async (req, res) => {
    const { username, API_KEY } = req.body

    if (API_KEY != process.env.API_KEY) { return res.status(404).json({ error: "No existe el usuario" }) }

    const result = await User.findOne({ username })

    if (!result) { return res.status(404).json({ error: "No existe el usuario" }) }

    return res.status(200).json({ result: result })
}

export const getInmueble = async (req, res) => {
    try {
        const { id } = req.body;

        const inmueble = await Inmueble.findById(id).exec();

        if (!inmueble) return res.status(404).json({ error: 'No existe ese inmueble' })

        return res.status(200).json(inmueble)
    }
    catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

export const getPhoto = async (req, res) => {
    try {
        const { id } = req.body;

        console.log(id)

        const inmueble = await Inmueble.findById(id).exec();

        if(!inmueble) return res.status(404).json({ error: "No se encontró el inmueble" })

        const photo = inmueble.photo;
        const imagePath = path.join(__dirname, `../backend/${photo}`) // Asegúrate de tener la carpeta y el archivo

        return res.status(200).sendFile(imagePath)
    }catch(e) {
        return res.status(500)
    }
}

export const getInmueblesPreview = async (req, res) => {
    let { searchQuery, filter, page = 1, limit = 5 } = req.body

    searchQuery = searchQuery.toLowerCase()

    const regex = new RegExp(searchQuery, 'i');
    console.log(searchQuery, regex)
    const filters = {
        price: 'price',
        reviews: 'review',
        house: 'house',
        flat: 'flat'
    }


    /*switch (filter) {
        case filters.price:
            inmueblesResult = await Inmueble.find({title: regex})
                .sort({ price: 1 }) // Ordenar por precio ascendente (para descendente, usar -1)
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            const countPrice = await Inmueble.countDocuments();

            res.json({
                inmueblesPrice,
                totalPages: Math.ceil(countPrice / limit),
                currentPage: page
            });
            break;
        case filters.reviews:
            const inmueblesResult = await Inmueble.find({ title: regex })
                .sort({ review: 1 }) // Ordenar por precio ascendente (para descendente, usar -1)
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            const countReview = await Inmueble.countDocuments();

            res.status(200).json({
                inmueblesResult,
                totalPages: Math.ceil(countReview / limit),
                currentPage: page
            });
            break
        case filters.city:
            break;
        case filters.house:
            break;
        case filters.flat:
            break;
    }*/

    const inmuebles = await Inmueble.find({ title: regex })
        .sort({ price: 1 }) // Ordenar por precio ascendente (para descendente, usar -1)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

    console.log(inmuebles)
    const countPrice = await Inmueble.countDocuments();

    res.json({
        inmuebles,
        totalPages: Math.ceil(countPrice / limit),
        currentPage: page
    });

}