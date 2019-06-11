let express = require('express');
let router = express.Router();
require('../../middlewares/guest/register')(router);

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', (req, res) => {
    res.send('plataforma : Register');
});

module.exports = router;
