const express = require("express");
const app = express();

// Set the port using environment variable or default to 4000
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON in the request body
app.use(express.json());

// Import routes
const todoRoutes = require("./routes/todos");

// Mount the todo API routes
app.use("/api/v1", todoRoutes); // Now accessible at http://localhost:4000/api/v1/cratetodos

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is the home page, baby!</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
