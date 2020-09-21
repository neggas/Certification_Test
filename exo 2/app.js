const express = require("express");
const path = require("path");
const mongoConnect = require("./utils/database");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const fs = require("fs");
const MongoDbStore = require("connect-mongodb-session")(session);
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));




app.use(
    session({
        secret: "my secret",
        resave: false,
        saveUninitialized: false,
    })
);


const userAuthRoute = require("./router/userAuth");
const articleRoute = require("./router/articlesRoute");


app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});


app.use(userAuthRoute);


const PORT = process.env.PORT || 3000;

mongoConnect((client) => {
    app.listen(PORT, () => {
        console.log(`le serveur ecoute sur le port ${ PORT }`)
    })
})