'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const bodyParser = require('body-parser');
const bodyParserJson = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

const app = express();
const router = express.Router();

app.use(bodyParserJson);
app.use(bodyParserURLEncoded);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api', router);
authRoutes(router);

router.get('/', (req, res) => {
    res.send('Hola Ricardo');
});

app.use(router);

app.listen(properties.PORT, () => {
    console.log(`Server on port ${properties.PORT}`);
});