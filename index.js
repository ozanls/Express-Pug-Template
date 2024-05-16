const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8888";


// SETTINGS FOR EXPRESS APP
app.set("views", path.join(__dirname, "templates")); // Setting for "views" is set to path: __dirname/views
app.set("view engine", "pug");

// SET UP FOLDER FOR STATIC FILES (e.g. CSS, client-side JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));


// SET UP PAGE ROUTE
app.get("/", (request, response) => {
    // response.status(200).send("Test");
response.render("index", { title: "Home" });
});
app.get("/about", (request, response) => {
    response.render("about", {title: "About"})
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});