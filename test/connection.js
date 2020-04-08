const mongoose = require('mongoose');

//assign global promise as default mongoose promise Es6 promise
mongoose.Promise = global.Promise


//connect to db before testrun
//hook1
before(function(done){


mongoose.connect('mongodb+srv://MekkyMayata:42toO5JmJPgmq5cr@ediblescluster-g5ret.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db server connected'))
    .catch((err) => console.log('db error'))

mongoose.connection.once('open', function() {
    console.log('Connection made')
    done();
}).on('error', function(error) {
    console.log('Connection failed due to: \n', error);
})
})




