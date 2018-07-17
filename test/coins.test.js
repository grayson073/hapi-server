const chai = require('chai');
const { assert } = chai;
const Coin = require('../models/Coin');

describe('Coin model', () => {


    // beforeEach(() => {
    //     const quarter = new Coin({
    //         name: 'Quarter',
    //         size: 'Medium',
    //         value: '$0.25'
    //     });

    //     return quarter.save();
    // });

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

    it('Validates required fields', () => {
        const coin = new Coin({});
        const validation = coin.validateSync();
        assert.isDefined(validation);
        const errors = validation.errors;
        
        assert.equal(Object.keys(errors).length, 3);
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.size.kind, 'required');
        assert.equal(errors.value.kind, 'required');
    });

});