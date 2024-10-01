import mongoose, { Schema, Document } from 'mongoose';

export interface BookI extends Document {
  id: Number;
  title: string;
  author: string;
  publishedYear: number;
}

const BookSchema: Schema = new mongoose.Schema({
  id: {type: Number, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
});

const BookModel = mongoose.model<BookI>('Book', BookSchema);
export default BookModel;

