const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const article = require('../models/article')

//dummy data
// let data = [{item:'You have fun, we\'ll handle the baking...'}, {item: 'alice'}]

//fire product model
article()

module.exports = function(app) {
    //routing

    //home page
    app.get('/edibles/home', function(req, res) {
        //fetching data from the database
        article.Product.find({}, (err, data) => {
            //console.log(data);
            if(err) throw err;
            res.render('home', {products: data});
        })
        
    })

    //admin page
    app.get('/edibles/admin', function(req, res) {})

    //about page
    app.get('/edibles/about', function(req,res) {

        res.render('about');
    })

    //contact page
    app.get('edibles/location', function(req, res) {})

    //signup
    app.get('edibles/signup', function(req, res) {})

    //update form
    app.get('/edibles/updates', function(req, res) {
        res.render('updates', {qs: req.query});
        console.log(req.query)
    });


    app.post('/edibles/content', urlencodedParser, (req, res) => {
        console.log(req.body);

        let newProduct = article.Product(req.body).save();
        article.Product.find({}, (err,data) => {
            if (err) {
                throw err;
            } else {
            res.render('home', {products: data});
            }
        })
        
    });

    //sessions
    app.post('/edibles/admin/login', function(req, res) {});

    
}