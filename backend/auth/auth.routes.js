const userCtrl = require('./auth.controller');

module.exports = (router) => {
    router.post('/register', userCtrl.createUser);
    router.post('/login', userCtrl.loginUser);
    
    
};