const { usersRequestQueries } = require("../requests/adminRequestQueries");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

exports.postConnexion = async(req, res, next) => {
    try {
        const authData = req.body;
        const userDoc = await usersRequestQueries.getAdminConnexion(authData.pseudo);
        console.log(userDoc);
        if (userDoc) {
            const isSame = await bcrypt.compare(
                authData.password,
                userDoc.result[0].password
            );
            if (isSame) {
                req.session.isLoggedIn = true;
                req.session.user = userDoc;

                return req.session.save(err => {

                    res.json({
                        "etat": true,
                        "response": userDoc,
                        "connected": true
                    });
                });
            } else {
                res.json({
                    "etat": false,
                    "response": "email ou mot de passe innexistant"
                })

            }
        } else {
            res.json({
                "etat": false,
                "response": "Veuiller créé un compte"
            })

        }
    } catch (error) {
        console.log(`erreur ${error}`);
    }
}

exports.postInscription = async(req, res, next) => {
    const userData = req.body;
    console.log(userData);

    const erros = validationResult(req);

    if (!erros.isEmpty()) {

        res.json({
            "etat": false,
            "response": erros.array()[0].msg
        })

    } else {
        try {
            const Result = await usersRequestQueries.getUserByEmail(userData);
            if (Result.res > 1) {
                return res.json({
                    "etat": false,
                    "response": "l'email existe deja"
                });
            } else {

                const encryptedPass = await bcrypt.hash(userData.password, 12);
                const data = {
                    email: userData.email,
                    password: encryptedPass,
                    pseudo: userData.pseudo
                }


                const response = await usersRequestQueries.setUser(data);
                if (response.res !== null) {
                    res.json({
                        etat: true,
                        "response": "Inscription réussi"
                    })
                }
            }

        } catch (err) {
            console.log(err);
        }
    }
};


exports.getDeconnexion = (req, res, next) => {
    req.session.destroy(err => {
        res.json({
            "etat": false,
            "connected": false
        })
    });
};