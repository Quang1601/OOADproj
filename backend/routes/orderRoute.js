import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderDetails } from '../controllers/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/add', createOrder);

orderRoute.delete('/delete/:orderId', deleteOrder);

orderRoute.get('/all', getAllOrders);

orderRoute.get('/:orderId', getOrderDetails);

export default orderRoute;
