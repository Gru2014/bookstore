const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.get("/books", async (req, res) => {
  const books = await getAllBooks();
  res.json(books);
});

router.get("/books/:id", async (req, res) => {
  const book = await getBookById(req.params.id);
  res.json(book);
});

router.post("/books", async (req, res) => {
  const newBook = await createBook(req.body);
  res.json(newBook);
});

router.put("/books/:id", async (req, res) => {
  const updatedBook = await updateBook(req.params.id, req.body);
  res.json(updatedBook);
});

router.delete("/books/:id", async (req, res) => {
  const deletedBook = await deleteBook(req.params.id);
  res.json(deletedBook);
});

module.exports = router;
