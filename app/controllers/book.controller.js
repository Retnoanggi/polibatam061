//app/controllers/book.controller.js
const Book = require("../models/book.model");
//Mengambil semua data buku
exports.findAll = (req, res) => {
 Book.getAll((err, data) => {
 if (err) {
 res.status(500).send({
 message:
 err.message || "Terjadi kesalahan"
 });
 } else res.send(data);
 });
};
