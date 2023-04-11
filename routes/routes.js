import express from 'express';
import { register, login, getUser } from '../controllers/user';


export const userRoute = express.Router();
// userRoute.route('/login')
//     .get(login);

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.get('/getUser', getUser)


