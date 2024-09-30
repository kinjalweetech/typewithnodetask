"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const bookMiddleware_1 = require("../middleware/bookMiddleware");
const router = express_1.default.Router();
// Get all books
router.get('/books', bookController_1.getAllBooks);
// Get book by ID
router.get('/books/:id', bookController_1.getBookById);
// Create a new book (with validation middleware)
router.post('/books', bookMiddleware_1.validateBook, bookController_1.createBook);
// Update a book by ID
router.put('/books/:id', bookMiddleware_1.validateBook, bookController_1.updateBook);
// Delete a book by ID
router.delete('/books/:id', bookController_1.deleteBook);
exports.default = router;
