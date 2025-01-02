import express from 'express';
import { createOrder, deleteOrder } from '../controllers/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/add', createOrder);

orderRoute.delete('/delete/:orderId', deleteOrder);

export default orderRoute;
