import express, { Request, Response } from 'express';
// import { validateBook } from '../middleware/bookMiddleware';
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/bookController';
import { validateBook } from '../middleware/bookMiddleware';

const router = express.Router();

// Get all books
router.get('/books', getAllBooks); // Ensure you have the getAllBooks function in the controller

// Get a specific book by ID
router.get('/books/:id', getBookById);

// Add a new book
router.post('/books',validateBook, createBook);

// Update a book by ID
router.put('/books/:id', validateBook, updateBook);

// Delete a book by ID
router.delete('/books/:id',deleteBook);

export default router;

