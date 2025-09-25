import { Router } from "express";
import { createUser } from '../controllers/usercontroller.js';

const userRoutes= Router()

userRoutes.get('/', (req, res) => {
    const { operation, number1, number2 } = req.params
    
    res.send('hello string');

})

userRoutes.post('/create', createUser);

export default userRoutes

