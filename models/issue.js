const mongoose = require('../db/connection.js')

const Issue = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 'open',
    },
    priority: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low'],
    },
});

module.exports = mongoose.model('Issue', Issue);
