const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// public static path

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));
app.set('view engine',"hbs")
app.set('views',templatePath);
hbs.registerPartials(partialsPath)

// routing

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/weather", (req, res) => {
  res.render("weather");
});


app.get("/about", (req, res) => {
  res.render("about");
});


app.get("*", (req, res) => {
  res.render("404error",{
    errorMsg:"Oops !! Page Not Found"
  });
});
app.listen("8000", () => {
  console.log("listening on port 8000");
});
