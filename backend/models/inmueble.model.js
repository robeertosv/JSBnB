import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    esApartamento: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: false,
        default: 0
    }
})

const Inmueble = mongoose.model('Inmueble', schema)

export default Inmueble;