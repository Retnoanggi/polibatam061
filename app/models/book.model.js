//app/models/book.models.js
const sql = require("./db.js");
const Book = function (book) {
 this.title = book.title;
 this.description = Book.description;
 this.images = Book.images;
};
//Mengambil semua data buku
Book.getAll = result => {
 sql.query("SELECT * FROM books", (err, res) => {
 if (err) {
 console.log("error: ", err);
 result(null, err);
 return;
 }
 console.log("result: ", res);
 result(null, res);
 });
};
module.exports = Book;