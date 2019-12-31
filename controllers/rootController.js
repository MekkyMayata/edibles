const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//dummy data
let data = [{item:'You have fun, we\'ll handle the baking...'}, {
    item: 'Welcome to the Edibles bakery an italian inspired bakery shop located in the heart of Lagos, at the Ikeja city mall, and at various shopping malls around the west-side.'}]



module.exports = function(app) {

    //routing
    app.get('/edibles/home', function(req, res) {
        res.render('home', {content:data});
    })

    app.get('/edibles/admin', function(req, res) {})

    app.get('/edibles/about', function(req,res) {
        res.render('about', {content:data});
    })

    app.get('edibles/location', function(req, res) {})

    app.get('edibles/signup', function(req, res) {})

    app.get('/edibles/content', function(req, res) {
        res.render('content', {qs: req.query});
        console.log(req.query)
    });

    app.post('/edibles/content', urlencodedParser, (req, res) => {
        console.log(req.body);
        res.render('home', {content: data});
    });

    app.post('/edibles/admin/login', function(req, res) {});

    
}