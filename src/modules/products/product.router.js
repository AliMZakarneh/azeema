import {Router} from 'express';
import * as productsController from './products.controller.js';
import {auth} from '../../middleware/auth.js';
import { endPoint } from './products.endpoint.js';
import fileUpload, { fileValidation } from '../../services/multer.js'
import reviewRouter from '../review/review.router.js';
import { validation } from '../../middleware/validation.js';
import * as validators from'../products/product.validation.js';
import { asyncHandler } from '../../services/errorHandling.js';
const router = Router();

router.use('/:productId/review',reviewRouter);

router.get('/',asyncHandler(productsController.getProducts));
router.post('/create',auth(endPoint.create),fileUpload(fileValidation.image).fields([
    {name:'mainImage',max:1},
    {name:'subImages',max:4}
]),validation(validators.createProduct),asyncHandler(productsController.createProduct));
router.get('/category/:categoryId',asyncHandler(productsController.getProductWithCategory));
router.get('/:productId',asyncHandler(productsController.getProduct));

export default router;