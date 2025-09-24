import { Router } from "express";

const userRoutes= Router()

userRoutes.get('/', (req, res) => {
    const { operation, number1, number2 } = req.params
    
    res.send('hello string');

})




export default userRoutes

