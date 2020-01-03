const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const product = require('../models/article')

//dummy data
let data = [{item:'You have fun, we\'ll handle the baking...'}, {
    item: 'Welcome to the Edibles bakery an italian inspired bakery shop located in the heart of Lagos, at the Ikeja city mall, and at various shopping malls around the west-side.'}]

//fire product model
product()

module.exports = function(app) {

    //routing
    app.get('/edibles/home', function(req, res) {
        //fetching data from the database
        product.Product.find({}, (err, data) => {
            if(err) throw err;
            res.render('home', {products: data});
        })
        
    })

    app.get('/edibles/admin', function(req, res) {})

    app.get('/edibles/about', function(req,res) {
        res.render('about', {content: data});
    })

    app.get('edibles/location', function(req, res) {})

    app.get('edibles/signup', function(req, res) {})

    app.get('/edibles/updates', function(req, res) {
        res.render('updates', {qs: req.query});
        console.log(req.query)
    });

    app.post('/edibles/content', urlencodedParser, (req, res) => {
        console.log(req.body);

        let newProduct = product.Product(req.body).save((err, data) => {
            if(err) throw err;
            
        })
        res.render('home', {content: data});
    });

    app.post('/edibles/admin/login', function(req, res) {});

    
}