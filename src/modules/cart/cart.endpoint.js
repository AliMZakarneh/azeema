import {roles} from '../../middleware/auth.js';

export const endPoint = {
    create:[roles.User,roles.Admin],
    remove:[roles.User,roles.Admin],
    clear:[roles.User,roles.Admin],
    get:[roles.User,roles.Admin]
}