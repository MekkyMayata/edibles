const express = require('express')

const app = express();

//template engine
app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'));

//fire controllers

app.listen(4000, () => {
    console.log('app listening on port 4000')
});