import userModel from '../models/user.model.js';

// Create user controller function
export const createUser = async (req, res) => {
    const { name, email, age, password } = req.body;
    try {
        // Create user in MongoDB
        const user = await userModel.create({ name, email, age, password });

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
};
