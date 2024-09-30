import { Request, Response, NextFunction } from 'express';

// Middleware to validate book input
export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, author, publishedYear } = req.body;
  
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'All fields are required' });
    
  }
  
  if (typeof publishedYear !== 'number') {
    return res.status(400).json({ message: 'Published year must be a number' });
  }

  next(); // Move to the next middleware/controller
};
