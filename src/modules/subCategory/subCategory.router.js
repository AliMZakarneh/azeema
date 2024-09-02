import { Router } from "express";
import * as subCategoryController from "./subCategory.controller.js";
import fileUpload, { fileValidation } from "../../services/multer.js";
import { asyncHandler } from "../../services/errorHandling.js";


const router = Router({mergeParams:true});

router.get('/',asyncHandler(subCategoryController.getsubCategories));

router.post('/',fileUpload(fileValidation.image).single('image'),
asyncHandler(subCategoryController.createSubCategory));




export default router;