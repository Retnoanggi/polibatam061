//app/routes/book.routes.js
module.exports = app => {
 const books = require("../controllers/book.controller");
 // cara mengakses gambar
http://polibatam.ac.id/img/perpustakaan.png
 // Mengambil semua data
 app.get("/api/books", books.findAll);
 // Mengambil data buku yang memiliki id = id
 app.get("/api/books/:id", books.findOne);
 // Membuat buku baru
 app.post("/api/books", books.create);
 // Mengubah data buku yang memiliki id = id
 app.put("/api/books/:id", books.update);
 // Hapus data buku yang memiliki id = id
 app.delete("/api/books/:id", books.delete);
 // Hapus seluruh data
 app.delete("/api/books", books.deleteAll);
};