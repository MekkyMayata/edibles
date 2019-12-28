const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });



module.exports = function(app) {

    //routing
    app.get('/edibles/home', function(req, res) {
        res.render('home');
    })

    app.get('/edibles/admin', function(req, res) {})

    app.get('/edibles/about', function(req,res) {
        res.render('about');
    })

    app.get('edibles/location', function(req, res) {})

    app.get('edibles/signup', function(req, res) {})

    app.post('/edibles/admin/login/post', urlencodedParser, function(req, res) {});

    app.post('/edibles/admin/login', function(req, res) {});

    
}