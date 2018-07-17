const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoinSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Coin', CoinSchema);