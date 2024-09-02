import { roles } from "../../middleware/auth.js";

export const endPoint = {
   
    create:[roles.User,roles.Admin],
    cancel:[roles.User,roles.Admin],
    get:[roles.User,roles.Admin],
    changeStatus:[roles.User,roles.Admin],
}