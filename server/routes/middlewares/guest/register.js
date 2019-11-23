require ('../../../config/database');

module.exports = function(router) {

    //on reçoit les données envoyer par Angular dans 'req'.
    //on renvoie les données vers angular dans 'res'.
    router.post('/', (req, res) => {

        const action = req.body.action;

        switch (action) {

            case 'register':

                let roleId = req.body.role.id;
                let userNom = req.body.userNom;
                let userPhone = req.body.userPhone;
                let userMail = req.body.userMail;
                let password = req.body.password;

                // DB INSERT INFO
                let content = [[roleId], [userNom], [userPhone], [userMail], [password]];
                db.query("INSERT INTO users(id_role, nom_user, telephone_user, mail_user, mdp_user) VALUES (?, ?, ?, ?, ?)",
                    content, (err) => {
                        if (err) {
                            res.json({
                                success: false,
                                message: 'Nous avons eu un souçis avec la base de données.'
                            });
                            throw err;
                        } else {

                                res.json({
                                    success: true,
                                    message: '=D'
                                });

                        }
                    });



              /*  console.log(userNom, userPhone, userMail, password);

                res.json({
                    success: true,
                    message: 'Ce message vient tout droit d\'express !'
                });
                break;*/








        }
    });
}


