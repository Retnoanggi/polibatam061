//app/models/book.models.js
const sql = require("./db.js");
const Book = function (book) {
 this.title = book.title;
 this.description = book.description;
 this.images = book.images;
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
// Mengambil buku yang memiliki id = BookId
Book.findById = (id, result) => {
 sql.query(`SELECT * FROM Books WHERE id = ${id}`, (err, res)
=> {
 if (err) {
 console.log("error: ", err);
 result(err, null);
 return;
 }
 if (res.length) {
 console.log(res[0]);
 result(null, res[0]);
 return;
 }
 result({ kind: "not_found" }, null);
 });
};
// Membuat data buku baru
Book.create = (newBook, result) => {
 console.log(newBook);
 sql.query("INSERT INTO books (title, description, images)
VALUES (?,?,?)",
message: `Error ketika mengambil buku dengan id ${req.params.id}`
 });
 }
 } else {
 res.send(data);
 }
 });
};
// Membuat data buku baru
exports.create = (req, res) => {
 if (!req.body) {
 res.status(400).send({
 message: "Content tidak boleh kosong"
 });
 }
 const book = new Book({
 title: req.body.title,
 description: req.body.description,
 images: req.body.images
 });
 Book.create(book, (err, data) => {
 if (err) {
 res.status(500).send({
 message:
 err.message || "Terjadi kesalahan"
 });
 }
 else {
 res.send(data);
 }
 });
};
// Mengupdate data buku yang memiliki id = id
exports.update = (req, res) => {
 if (!req.body) {
 res.status(400).send({
 message: "Content tidak boleh kosong"
 });
 }
 Book.updateById(
 req.params.id,
 new Book(req.body), (err, data) => {
 if (err) {
 if (err.kind === "not_found") {
 res.status(404).send({
 message: `Buku dengan id ${req.params.id} tidak ditemukan`
 });
 } else {
 res.status(500).send({
	 message: `Error ketika mengupdate buku dengan id ${req.params.id}`
 });
 }
 } else {
 res.send(data);
 }
 }
 );
};
// Menghapus buku yang memiliki id = id
exports.delete = (req, res) => {
 Book.remove(req.params.id, (err, data) => {
 if (err) {
 if (err.kind === "not_found") {
 res.status(404).send({
 message: `Buku dengan id ${req.params.id} tidak ditemukan`});
 } else {
 res.status(500).send({
 message: `Error ketika menghapus buku dengan id ${req.params.id}`});
 }
 } else res.send({ message: `Berhasil menghapus data buku!`});
 });
};
// Menghapus semua buku
exports.deleteAll = (req, res) => {
 Book.removeAll((err, data) => {
 if (err) {
 res.status(500).send({
 message:
 err.message || "Terjadi kesalahan"
 });
 }
 else {
 res.send({ message: `Berhasil menghapus seluruh data buku!` });
 }
 });
};
