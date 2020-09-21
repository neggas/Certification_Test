const authSecure = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.json({
            "etat": false,
            "connected": false
        })
    }
}

module.exports = authSecure;