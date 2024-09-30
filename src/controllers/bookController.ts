import { Request, Response } from "express";
import BookModel from "../model/bookModel";

// Get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, publishedYear } = req.body;
    const newBook = new BookModel({ title, author, publishedYear });
    console.log("title",title);
    
    const savedBook = await newBook.save();
    res.status(201).json({ savedBook, message: "successfully create a book" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a book
export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
