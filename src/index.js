const express = require('express');
const rootController = require('./controllers/rootController');
const app = express();

//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//static files
app.use(express.static('./src/public'));

//fire controllers
rootController(app);

app.listen(4000, () => {
    console.log('app listening on port 4000');
});