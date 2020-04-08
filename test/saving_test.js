const assert = require('assert')
const article = require('../models/article')

//describe your tests

describe('saving records', function() {
    
    it('saves a record on the db', function(done) {
        this.timeout(5000);
        let char = new article.Product({
            product: 'ginger muffins',
            description: 'IpsumLorem'
        });
        char.save()
        .then(function() {
            assert(char.isNew === false);
            //end the test by calling mocha done()
            done()
        })
    })
});