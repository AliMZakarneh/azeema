import {Router} from 'express';
import * as reviewController from "./review.controller.js";
import { endPoint } from './review.endPoint.js';
import { auth } from '../../middleware/auth.js';
import { asyncHandler } from '../../services/errorHandling.js';
const router = Router({mergeParams:true});

router.post('/',auth(endPoint.create),asyncHandler(reviewController.create));


export default router;