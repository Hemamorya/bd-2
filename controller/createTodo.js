// Import Todo schema
const Todo = require("../models/Todo");

// Define route handler
exports.createTodo = async (req, res) => {
    try {
        // Extract title and description from request body
        const { title, description } = req.body;

        // Create a JSON response with a success flag
        const resposne=await Todo.create({title,description})
        res.status(200).json({
            success: true,
            data:response,
            message: "Entry created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: null,
            message: err.message
        });
    }
};
