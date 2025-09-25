import express from 'express'
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // <-- use ES module import
import userModel from './models/user.model.js';
const app = express();
const port = 5555;

// Load environment variables from .env file
dotenv.config();

//database connection with mongodb
if (!process.env.DATABASE_URL || 
    (!process.env.DATABASE_URL.startsWith('mongodb://') && !process.env.DATABASE_URL.startsWith('mongodb+srv://'))) {
    console.error('Invalid DATABASE_URL. Please check your .env file.');
    process.exit(1);
}

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);

});

//fetch api ko run krna hy
//.then accept statement
//// try {
    
// } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
    
// }


// fetch('https://api.example.com/data').then




// Middleware to parse JSON bodies from POST requests
app.use(express.json());
app.use("/user", userRoutes) //clr+space auto import

// Start server


app.get('/', (req, res) => {
    res.send('connected to backend server');
});

app.post('/create', async (req, res) => {
    // Extract data from request body
    const { name, email, age, password } = req.body;

    try {
        // Create user in MongoDB
        const user =  userModel.create({ name, email, age, password });

        // Send success response
        res.send({
            status: "success",
            data: user,
            code: 200
        });
    } catch (error) {
        console.error('post api error:', error);

        // Send error response
        res.status(400).send({
            status: false,
            error: error.message
        });
    }
});

app.listen(port, () => {
    const dataString = process.env.DATABASE_URL;
    console.log(`Server is running on http://localhost:${port}`);
    console.log('DATABASE_URL:', dataString);
});
