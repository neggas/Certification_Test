const express = require("express");
const authSecure = require("../middaleware/authSecure");
const router = express.Router();


const articleController = require("../controllers/articlesControllers");

router.get("api/v1/articles", articleController.getArticles);
// router.get("api/v1/:id", articleController.readArticles);
// router.get("api/v1/:id/comment", authSecure, articleController.getCommentArticles);
// router.post("api/v1/:id/comment", authSecure, articleController.postCommentArticles);

module.exports = router;