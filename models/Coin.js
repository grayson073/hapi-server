const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoinSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large']
    },
    value: {
        type: Number,
        required: true,
        min: 0.01,
        max: 0.50
    },
    isShiny: {
        type: Boolean,
        required: false,
    }
});

module.exports = mongoose.model('Coin', CoinSchema);