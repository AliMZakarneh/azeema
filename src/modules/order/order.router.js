import {Router} from 'express';
import * as orderController from './order.controller.js';
import { auth } from '../../middleware/auth.js';
import { endPoint } from './order.endpoint.js';
import { asyncHandler } from '../../services/errorHandling.js';

const router = Router();

router.post('/',auth(endPoint.create),asyncHandler(orderController.createOrder));
router.get('/',auth(endPoint.get),asyncHandler(orderController.getOrders));
router.patch('/cancel/:orderId',auth(endPoint.cancel),asyncHandler(orderController.cancelOrder));
router.patch('/changeStatus/:orderId',auth(endPoint.changeStatus),asyncHandler(orderController.changeStatus));
export default router;