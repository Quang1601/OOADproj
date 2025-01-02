import express from 'express';
import { addCart, removeCart, getCart } from '../controllers/cartController.js';

const cartRoute = express.Router();

cartRoute.post('/add', addCart);

cartRoute.delete('/delete', removeCart);

cartRoute.get('/find/:cartId', getCart);

export default cartRoute;
