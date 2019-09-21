const mongoose = require('mongoose');
const properties = require('./properties');

module.exports = () => {
    mongoose.connect(properties.DB, {useNewUrlParser: true})
            .then(() => console.log(`Mongo connected on ${properties.DB}`))
            .catch( err => console.log(`Connetion has error ${err}`));

    process.on('SIGINT', () => {
        mongoose.connection.close( () => {
            console.log(`Se perdio la connecion a la base de datos`);
            process.exit(0);
        });
    });
}