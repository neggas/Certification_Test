const express = require("express");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

// router.get("/admin-connect", adminControllers.postConnexion);
router.post("/admin-connect", adminControllers.postConnexion);


// router.get("/admin/dashboard", authController.getDashboard);
// router.get("/admin/mod/:id", authController.getModArticle);
// router.post("/admin/mod/:id", authController.postModArticle);
// router.get("/admin/cfremove/:id", authController.pageRemoveArticle);
// router.get("/admin/remove/:id", authController.removeArticle);
// router.get("/admin/add", authController.getaddArticle);
// router.post(
//     "/admin/add",
//     upload.single("fichier"),
//     authController.postaddArticle
// );


module.exports = router;