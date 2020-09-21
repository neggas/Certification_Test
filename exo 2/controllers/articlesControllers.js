const Article = require('../models/Articles.model');
const { articlesRequestQueries } = require("../requests/articlesRequestQueries");
const mongoose = require('mongoose');

exports.getArticles = async(req, res) => {

    try {
        const Result = await articlesRequestQueries.getAllArticles();
        if (Result.result !== null) {
            res.json({
                "etat": true,
                "response": Result.result
            })
        } else {
            res.json({
                "etat": false,
                "response": []
            })
        }

    } catch (e) {
        console.log("erreur " + e);
    }

};

exports.viewArticle = async(req, res) => {

    try {


        const articleId = req.params.id;
        const Result = articlesRequestQueries.getArticleById(articleId);

        if (Result.result !== null) {
            res.json({
                "etat": true,
                "response": Result.result
            })
        } else {
            res.json({
                "etat": false,
                "response": []
            })
        }

    } catch (e) {
        console.log(e);
    }

};

exports.getCommentArticles = async(req, res) => {
    try {

        const articleId = req.params.id;
        const Result = await articlesRequestQueries.getArticleById({ _id: articleId });

        if (Result.result !== null) {
            res.json({
                "etat": true,
                "response": Result.result
            })
        }
    } catch (error) {
        console.log(error);
    }
};

exports.postCommentArticles = async(req, res) => {

    try {

        const commentaire = req.body.commentaire;
        const date = new Date();

        const time = {
            month: date.getMonth(),
            day: date.getDay(),
            year: date.getUTCFullYear()

        }

        if (commentaire && commentaire !== '') {

            //creation d'objet commentaire
            const commentObject = { commentaire, time, user: req.session.user.pseudo }

            //on accede a un commentaire grace a son id
            const articleId = req.params.id;
            const Result = await articlesRequestQueries.getArticleById(articleId);

            if (Result.result !== null) {

                let currentComments = [...Result.result.comments];
                currentComments.push(commentObject);
            }



            const UpdateResult = await Article.findByIdAndUpdate({ _id: articleId }, { comments: currentComments });
            if (UpdateResult.result !== null) {
                return res.json({
                    "etat": true,
                    "response": "Mise à jour réussi"
                });
            } else {
                return res.json({
                    "etat": false,
                    "response": "echec d'enregistrement de commentaire"
                });
            }

        } else {

            return res.json({
                etat: false,
                "response": "Vous tentez d'envoyer un commentaire vide"
            })
            return res.redirect('/' + req.url);
        }

    } catch (err) {
        console.error(err);
    }

};