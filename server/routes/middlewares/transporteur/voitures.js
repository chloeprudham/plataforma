require ('../../../config/database');

module.exports = function(router) {

    router.post('/', (req, res) => {

        const action = req.body.action;

        switch (action) {

            case 'voiture':

                let autoType = req.body.autoType;
                let autoMark = req.body.autoMark;
                let autoModel = req.body.autoModel;
                let autoNdi = req.body.autoNdi;
                let autoClient = req.body.autoClient;
                let autoPhoto = req.body.autoPhoto;

                // DB INSERT

                let content = [[autoType], [autoMark], [autoModel], [autoNdi], [autoClient], [autoPhoto]];
                db.query("INSERT INTO vehicules (type_vehicule, marque_vehicule, modele_vehicule, pdi_vehicule, passager_vehicule, photo_vehicule) VALUES (?, ?, ?, ?, ?, ?)",
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
                                message: 'New car.'
                            });

                        }
                    });

        }
    });
}
