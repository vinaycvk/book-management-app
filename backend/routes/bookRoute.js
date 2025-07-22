import express from 'express'
import { Book } from '../models/bookModel.js';
import { getBooks, createBook, getBook, editBook, deleteBook } from '../controllers/bookControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createBook);
router.get('/', getBooks)
router.get('/:id', getBook)
router.put('/:id', protect, editBook)
router.delete('/:id',protect, deleteBook)



export default router