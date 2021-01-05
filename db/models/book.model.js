const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: String,
    title: String,
    earnings: Number,
    description: String
})

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book }
