
import express from 'express';
import dotenv from 'dotenv';
// import './config/db'; 
import router from './route/booksRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Mount the book routes
app.use('/api', router);

export default app;
