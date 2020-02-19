const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors")
var path = require('path');
const app = express();
// parse requests - application/json
app.use(bodyParser.json());
// parse requests - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//cors
var cor = cors();
app.use(cor);
//path
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
 res.json({ message: "Selamat datang pada matakuliah pemrograman perangkat bergerak" });
});
require("./app/routes/book.routes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});
