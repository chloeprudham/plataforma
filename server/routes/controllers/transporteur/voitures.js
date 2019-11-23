let express = require('express');
let router = express.Router();
require('../../middlewares/transporteur/voitures')(router);

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', (req, res) => {
    res.send('plataforma : Voitures');
});

module.exports = router;
