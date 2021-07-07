var mongoose = require('mongoose');

module.exports = {
    connect: () => {

        const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
        const MONGO_PORT = process.env.MONGO_PORT;
        const MONGO_DB = process.env.MONGO_DB;
        const MONGO_USER = process.env.MONGO_USER;
        const DB_URL = `mongodb+srv://gdiazs:Cupcake1189!@activatorcluster0.xzqs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(DB_URL);

        //Log an error if we fail to connect
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log('MongoDB connection failed: ' + DB_URL);
            process.exit();
        });


        return mongoose;
    }
};