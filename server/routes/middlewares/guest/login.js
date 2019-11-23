require('../../../config/database');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function(router) {

    router.post('/', (req, res) => {

        const action = req.body.action;
        /*
        const userMail = req.body.userMail;
        const password = req.body.password;
        */

        switch (action) {

            case 'tryConnect':
                const usermailForm = req.body.userMail;
                const passForm = req.body.password;

                // PASS AND MAIL LENGTH
                const passLengthMin = 3,
                      passLengthMax = 255,
                      userMailLengthMin = 12,
                      userMailLengthMax = 255;

                if (usermailForm.length >= userMailLengthMin && usermailForm.length <= userMailLengthMax){
                    if (passForm.length >= passLengthMin && passForm.length <= passLengthMax){

                        //READ THE SQL TABLE IF THE userMail EXIST
                        db.query('SELECT * FROM users WHERE mail_user=?', [usermailForm], (err, result) =>{

                            if (err){
                                res.json({
                                    success: false,
                                    message: "Try again please."
                                });
                                throw err;
                            }

                            if (result.length !==0){

                                let passFormCript = bcrypt.hash(passForm);
                                let passDb = result[0].mdp_user;

                                if(passDb === null) {passDb = result[0].mdp_temp_user;}

                                // compare the password
                                if(passFormCript === passDb) {



                                // CHECK USER ADMIN
                                let admActive = false;
                                if (result[0].id_role === 3) {
                                    admActive = true;
                                }

                                // GENERATE TOKEN
                                const token = jwt.sign({ id_user: result[0].id_user, adm: admActive });
                                res.json({
                                    success: true,
                                    message: "Wait a moment please.",
                                    token: token,
                                    user: { prenom_user:result[0].prenom_user, mail_user: result[0].mail_user }
                                });

                            } else {
                                res.json({
                                    success: false,
                                    message: "Password Incorrect"
                                });
                            }

                            }else {
                                res.json({
                                    success: false,
                                    message: "Mail Incorrect"
                                });
                            }

                        });
                    } else {
                        res.json({
                            success: false,
                            message: "Le mot de passe doit avoir un minimum de " + passLengthMin + " caractères et ne doit pas dépasser " + passLengthMax + " caractères !"
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        message: "Le nom d'utilisateur doit avoir un minimum de " + passLengthMin + " caractères et ne doit pas dépasser " + passLengthMax + " caractères !"

                    });
                }
/*
            case 'login':
                console.log(userMail, password);

                res.json({
                    success: true,
                    message: 'Ce message vient tout droit d\'express !'
                });
                break;
*/
        }
    });
}

