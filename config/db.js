var mongoose = require('mongoose');

module.exports = {
    connect: () => {

        const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
        const MONGO_PORT = process.env.MONGO_PORT;
        const MONGO_DB = process.env.MONGO_DB;
        const MONGO_USER = process.env.MONGO_USER;
        const DB_URL = `mongodb://${MONGO_USER}:Test1234@${MONGO_HOSTNAME}:${MONGO_PORT}/activator?authSource=admin&poolSize=1`;

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