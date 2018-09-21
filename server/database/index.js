//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useUpdate', false)

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb+srv://bpDataMan1:F6f5g32ynEg22gG@bunkpointscluster0-wqin6.mongodb.net'
const collection = 'users'

mongoose.connect(uri + '/' + collection, { useNewUrlParser: true }).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('Connected to Mongo');

    },
    err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);

    }
);


module.exports = mongoose.connection