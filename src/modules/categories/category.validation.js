import joi from 'joi';
import { generalFields } from '../../middleware/validation.js';

export const createCategory = joi.object ({
    name:joi.string().min(2).max(15).required(),
    file:generalFields.file.required(),
}) ;

export const getSpecificCategory = joi.object({
    id:joi.string().min(24).max(24).required(),
})