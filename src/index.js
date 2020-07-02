const express = require('express');
const config = require('./config');

const rootController = require('./controllers/rootController');
const app = express();

//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//static files
app.use(express.static('./src/public'));

//fire controllers
rootController(app);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('app listening on port: ' + port);
});