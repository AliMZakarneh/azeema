import {roles} from '../../middleware/auth.js';

export const endPoint = {
    create:[roles.Admin,roles.User],
    getAlls:[roles.Admin,roles.User],
    getActive:[roles.Admin,roles.User],
    update:[roles.Admin,roles.User],
    specific:[roles.Admin,roles.User]
}