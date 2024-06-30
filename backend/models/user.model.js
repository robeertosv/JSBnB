import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    profilePic: {
        type: String,
        required: false
    },
    accountType: {
        type: String,
        required: true,
        default: 'particular'
    }
})

const User = mongoose.model("User", schema)

export default User;