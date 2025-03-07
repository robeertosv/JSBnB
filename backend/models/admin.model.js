import mongoose from 'mongoose'

const model = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const Admin = mongoose.model('Admin', model)

export default Admin