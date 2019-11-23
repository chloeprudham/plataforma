let express = require('express');
let router = express.Router();
require('../../middlewares/guest/booking')(router);

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', (req, res) => {
    res.send('plataforma : Booking');
});

module.exports = router;
