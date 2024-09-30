import mongoose, { Schema, Document } from 'mongoose';

// Interface representing a Book
export interface BookI extends Document {
  title: string;
  author: string;
  publishedYear: number;
}

// Book Schema definition
const BookSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
});

// Exporting the Mongoose model
const BookModel = mongoose.model<BookI>('Book', BookSchema);
export default BookModel;
