import { NextFunction, Request, Response } from "express";
import BookModel from "../model/bookModel";

// Get all books
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error while fetching books" });
  }
};

// Get a book by ID
export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ message: "Server error while fetching book by ID" });
  }
};

// Create a new book
export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, title, author, publishedYear } = req.body;
    const newBook = new BookModel({ id, title, author, publishedYear });
    const savedBook = await newBook.save();

    res.status(201).json({ savedBook, message: "Book created successfully" });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: "Server error while creating book" });
  }
};

// Update a book by ID
export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    res.status(200).json({ updatedBook, message: "Book updated successfully" });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error while updating book" });
  }
};

// Delete a book by ID
export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    res.status(204).send(); // 204 No Content means successful deletion
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error while deleting book" });
  }
};
