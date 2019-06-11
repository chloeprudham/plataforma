let test = require('./controllers/test');
let login = require('./controllers/guest/login');
// let register = require ('./controllers/guest/register');

module.exports = function(app)
{

    app.use('/test', test);
    app.use('/login', login);
    // app.use('/register', register);

};
