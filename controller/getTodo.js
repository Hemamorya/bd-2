// Import Todo schema
const Todo = require("../models/Todo");

// Define route handler
exports.getTodo = async (req, res) => {
    try {
       //fetch all data from todo items
       const todos=await Todo.find({});
   //response
       res.status(200)
       .json({
        success: true,
        data:todos,
        message: "Entry created successfully"
    });
} catch (err) {
    console.error(err);
    res.status(500).json({
        success: false,
       error:err.message,
        message: err.message
    });
        
    }
};
