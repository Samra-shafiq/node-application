import express from 'express'
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // <-- use ES module import
const app = express();
const port = 5555;
import itemRoutes from "./routes/item.routes.js";

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

// Middleware to parse JSON bodies from POST requests
app.use(express.json());
app.use("/user", userRoutes); //clr+space auto import
app.use("/item", itemRoutes); // <-- Changed from /items to /item

app.get('/', (req, res) => {
    res.send('connected to backend server');
});

app.listen(port, () => {
    const dataString = process.env.DATABASE_URL;
    console.log(`Server is running on http://localhost:${port}`);
    console.log('DATABASE_URL:', dataString);
});
