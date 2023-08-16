const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: [{
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }]
},{
    versionKey: false,
    timestamps: true,
}
)

const todoModel = mongoose.model("todolist", todoSchema);

module.exports = todoModel;