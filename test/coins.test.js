const chai = require('chai');
const { assert } = chai;
const Coin = require('../models/Coin');

describe('Coin model', () => {

    it('Validates a good model', () => {
        const data = {
            name: 'Quarter',
            size: 'Medium',
            value: '$0.25'
        };

        const coin = new Coin(data);

        const json = coin.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(coin.validateSync());
    });

});