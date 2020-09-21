const MongoClient = require('mongoose');
const config = require('./config.json');



const mongoConnect = (callback) => {

    MongoClient.connect(config.db.url + config.db.port + config.db.dbname, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            reconnectTries: Number.MAX_VALUE,
        })
        .then((result) => {
            callback(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = mongoConnect;