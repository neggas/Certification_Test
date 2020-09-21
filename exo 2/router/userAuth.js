const express = require("express");
const router = express.Router();
const { body } = require("express-validator/check");
const userAuthControllers = require("../controllers/userAuthControllers");


// router.get("/api/v1/inscription", userAuthControllers.getInscription);
router.post("/api/v1/postConnexion", userAuthControllers.postConnexion);
// router.get("/api/v1/connexion", userAuthControllers.getConnexion);


router.post("/api/v1/postInscription", [
    body("email", "Votre email n'est pas valide").isEmail(),
    body(
        "pseudo",
        "Entrez un Pseudo Valabe (Minimun 5 lettres avec des chiffres )"
    )
    .isLength({ min: 5 })
    .isAlphanumeric(),


], userAuthControllers.postInscription);

module.exports = router;