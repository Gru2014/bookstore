const Book = require("../model/Book");

const getAllBooks = async () => {
  return await Book.find();
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

const createBook = async (data) => {
  const newBook = new Book(data);
  return await newBook.save();
};

const updateBook = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = {
  getBookById,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};