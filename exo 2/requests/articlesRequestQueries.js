const Articles = require("../models/Articles.model");

exports.articlesRequestQueries = class {

    //enregistrement d'un article
    static setArticle(data) {

        return new Promise(async next => {
            const user = await new User({
                titre: data.titre,
                article: data.article,
                like: data.like,
                views: data.views,
                image: data.image,
                comments: data.comment
            });
            await Articles.save().then(res => {
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

    //recuperer tous les articles
    static getAllArticles() {

        try {

            return new Promise(async next => {
                Article.find().then(data => {
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
    static getArticleById(data) {

        try {

            return new Promise(async next => {
                Article.find({ _id: data._id }).then(data => {
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

    //update d'un article
    static updateArticleComment(data) {
        try {

            return new Promise(async next => {
                Article.findByIdAndUpdate({ _id: data }, { comments: currentComments }).then(data => {
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