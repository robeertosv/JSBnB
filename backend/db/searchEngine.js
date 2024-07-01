import express from 'express'
import User from '../models/user.model.js'
import Inmueble from '../models/inmueble.model.js'


// Get user info by username
export const getUser = async (req, res) => {
    const { username, API_KEY } = req.body

    if (API_KEY != process.env.API_KEY) { return res.status(404).json({ error: "No existe el usuario" }) }

    const result = await User.findOne({ username })

    if (!result) { return res.status(404).json({ error: "No existe el usuario" }) }

    return res.status(200).json({ result: result })
}

export const getInmueblesPreview = async (req, res) => {
    const { query, filter, page=1, limit=5 } = req.body
    const regex = new RegExp(query, 'i'); 
    const filters = {
        price: 'price',
        reviews: 'reviews',
        city: 'city',
        house: 'house',
        flat: 'flat'
    }

    switch (filter) {
        case filters.price:
            const inmueblesPrice = await Inmueble.find({title: regex})
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
            const inmueblesReview = await Inmueble.find({ title: regex })
                .sort({ review: 1 }) // Ordenar por precio ascendente (para descendente, usar -1)
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            const countReview = await Inmueble.countDocuments();

            res.status(200).json({
                inmueblesReview,
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
    }
}