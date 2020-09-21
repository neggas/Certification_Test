const User = require("../models/Users.model");

exports.usersRequestQueries = class {

    //enregistrement d'un utilisateur
    static setUser(data) {

        return new Promise(async next => {
            const user = await new User({
                pseudo: data.pseudo,
                email: data.email,
                password: data.password
            });
            await user.save().then(res => {
                next({
                    etat: true,
                    result: res
                });
            }).catch(err => {
                next({
                    etat: false,
                    err: err
                });
            })
        })

    }

    //recuperer un utilisateur par son email
    static getUserByEmail(data) {

        try {

            return new Promise(async next => {
                User.find({ email: data.email }).then(data => {
                    next({
                        etat: true,
                        result: data
                    });
                }).catch(err => {
                    next({
                        etat: false,
                        err: err
                    });
                })
            })
        } catch (error) {
            console.log(error);
        }

    }

    static getUserById(data) {

        try {

            return new Promise(async next => {
                User.find({ _id: data._id }).then(data => {
                    next({
                        etat: true,
                        result: data
                    });
                }).catch(err => {
                    next({
                        etat: false,
                        err: err
                    });
                })
            })
        } catch (error) {
            console.log(error);
        }

    }

}