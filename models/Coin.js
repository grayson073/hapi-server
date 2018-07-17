const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoinSchema = new Schema({
    name: String,
    size: String,
    value: String
});

module.exports = mongoose.model('Coin', CoinSchema);