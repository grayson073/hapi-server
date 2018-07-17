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
    }
});

module.exports = mongoose.model('Coin', CoinSchema);