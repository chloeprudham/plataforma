module.exports = function(router) {

    //on reçoit les données envoyer par Angular dans 'req'.
    //on renvoie les données vers angular dans 'res'.
    router.post('/', (req, res) => {

        const action = req.body.action;
        const bookDepart = req.body.bookDepart;
        const bookArrive = req.body.bookArrive;
        const bookDate = req.body.bookDate;
        const bookHeure = req.body.bookHeure;
        const bookPassager = req.body.bookPassager;
        const bookBagage = req.body.bookBagage;

        switch (action) {

            case 'register':
                console.log(bookDepart, bookArrive, bookDate, bookHeure, bookPassager, bookBagage);

                res.json({
                    success: true,
                    message: 'Ce message vient tout droit d\'express !'
                });
                break;
        }
    });
}
