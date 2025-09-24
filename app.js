import express from 'express'

import userRoutes from './routes/user.routes.js';
const app = express();
const port = 5555;
// Middleware to parse JSON bodies from POST requests
app.use(express.json());
app.use("/user",userRoutes) //clr+space auto import




// This is your original POST route, which remains unchanged


// New GET route for calculations using URL parameters
// The route captures 'operation', 'number1', and 'number2' from the URL.



// Start servernpm 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

