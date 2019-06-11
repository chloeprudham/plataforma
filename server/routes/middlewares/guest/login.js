

module.exports = function(router) {

    //on reçoit les données envoyer par Angular dans 'req'.
    //on renvoie les données vers angular dans 'res'.
    router.post('/', (req, res) => {

        const action = req.body.action;
        const userMail = req.body.userMail;
        const password = req.body.password;

        switch (action) {

            case 'login':
                console.log(userMail, password);

                res.json({
                    success: true,
                    message: 'Ce message vient tout droit d\'express !'
                });
                break;
        }
    });
}
