let test = require('./controllers/test');
let login = require('./controllers/guest/login');
let register = require ('./controllers/guest/register');
let booking = require ('./controllers/guest/booking');
let voitures = require ('./controllers/transporteur/voitures');

module.exports = function(app)
{
    app.use('/test', test);
    app.use('/login', login);
    app.use('/register', register);
    app.use('/booking', booking);
    app.use('/voitures', voitures);

};
