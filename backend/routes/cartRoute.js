import express from 'express';
import { addCart, removeCart } from '../controllers/cartController.js';

const cartRoute = express.Router();

cartRoute.post('/add', addCart);

cartRoute.delete('/delete', removeCart);

export default cartRoute;
