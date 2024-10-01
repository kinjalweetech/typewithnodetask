import { Request, Response, NextFunction } from 'express';

const validateBook = (req: Request, res: Response, next: NextFunction): void => {
  const { id, title, author, publishedYear } = req.body;

  // Check if all fields are present
  if (!id || !title || !author || !publishedYear) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  // Check that publishedYear is a valid number
  if (typeof publishedYear !== 'number') {
    res.status(400).json({ message: 'Published year must be a number' });
    return;
  }

  // If validation passes, proceed to the next middleware
  next();
};

export default validateBook;

