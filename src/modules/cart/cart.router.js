import {Router} from 'express';
import * as cartController from './cart.controller.js';
import { auth } from '../../middleware/auth.js';
import { endPoint } from './cart.endpoint.js';
import { asyncHandler } from '../../services/errorHandling.js';
const router = Router();

router.post('/',auth(endPoint.create),asyncHandler(cartController.createCart));
router.patch('/removeItem',auth(endPoint.remove),asyncHandler(cartController.removeItem));
router.patch('/clear',auth(endPoint.clear),asyncHandler(cartController.clearCart));
router.get('/get',auth(endPoint.get),asyncHandler(cartController.getCart));

export default router;
