//require mongoose
let mongoose = require('mongoose')

module.exports = function() {
//create a connection 
mongoose.connect('mongodb+srv://MekkyMayata:42toO5JmJPgmq5cr@ediblescluster-g5ret.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db server connected'))
    .catch((err) => console.log('db error'))

mongoose.connection.once('open', function() {
    console.log('Connection made')
}).on('error', function(error) {
    console.log('Connection failed due to: \n', error);
})



}

//create a schema for the model/collection
const productSchema = new mongoose.Schema({
    product: String,
    description: String
})

//create the model
const Product = mongoose.model('Product', productSchema);

module.exports.ProductSchema = productSchema
module.exports.Product = Product