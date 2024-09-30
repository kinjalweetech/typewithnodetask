"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBook = void 0;
// Middleware to validate book input
const validateBook = (req, res, next) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (typeof publishedYear !== 'number') {
        return res.status(400).json({ message: 'Published year must be a number' });
    }
    next(); // Move to the next middleware/controller
};
exports.validateBook = validateBook;
