const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const article = require('../models/article')

//dummy data
// let data = [{item:'You have fun, we\'ll handle the baking...'}, {item: 'alice'}]

//fire product model
article()

module.exports = function(app) {

    //routing
    app.get('/edibles/home', function(req, res) {
        //fetching data from the database
        article.Product.findById({"_id":"5e0fa16ec7b1521fb253390b"}, (err, data) => {
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

        let newProduct = article.Product(req.body).save((err, data) => {
            if(err) throw err;
            
        })
        res.render('home', {content: data});
    });

    app.post('/edibles/admin/login', function(req, res) {});

    
}