const mongoose = require('mongoose')
const userSchema = new mongoose.Schema ({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    todolist: [ {
        type: mongoose.Types.ObjectId,
        ref: "todolist"
    }]
}, {
    versionKey: false,
    timestamps: true,
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;