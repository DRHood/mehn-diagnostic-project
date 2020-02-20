const mongoose = require('../db/connection.js')

const Issue = new mongoose.Schema({
    description: String,
    createdAt: Date,
    status: String,
    priority: String
});

module.exports = mongoose.model('Issue', Issue);
