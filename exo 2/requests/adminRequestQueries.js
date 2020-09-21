const Admin = require("../models/Admin.model");

exports.articlesRequestQueries = class {


    //get Admin
    static getAdmin() {

        try {

            return new Promise(async next => {
                Admin.find().then(data => {
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

    //recuperation d'un article oar son ID
    static getAdminConnexion(data) {

        try {

            return new Promise(async next => {
                Article.find({ pseudo: data.psuedo }).then(data => {
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