import mongoose from 'mongoose'

const model = new mongoose.Schema({
    inmuebleID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    fechaEntrada: {
        type: Date,
        required: true
    },
    fechaSalida: {
        type: Date,
        required: true
    },
    personas: {
        type: Number,
        required: true
    },

    //¿Ha valorado ya este inmueble?
    review: {
        type: Boolean,
        required: false,
        default: false
    }
})

const Reserva = mongoose.model('Reserva', model)

export default Reserva