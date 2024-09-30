"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
// Get all books
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.find();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getAllBooks = getAllBooks;
// Get a specific book by ID
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.default.findById(req.params.id);
        if (!book)
            return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getBookById = getBookById;
// Create a new book
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishedYear } = req.body;
        const newBook = new bookModel_1.default({ title, author, publishedYear });
        const savedBook = yield newBook.save();
        res.status(201).json(savedBook);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.createBook = createBook;
// Update a book
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield bookModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook)
            return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(updatedBook);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateBook = updateBook;
// Delete a book
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBook = yield bookModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedBook)
            return res.status(404).json({ message: 'Book not found' });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteBook = deleteBook;
