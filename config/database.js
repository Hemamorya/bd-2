const mongoose = require("mongoose");
 // Import dotenv and load environment variables
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true, // no longer needed in MongoDB Node.js driver v4.0.0+
            useUnifiedTopology: true, // no longer needed in MongoDB Node.js driver v4.0.0+
        });

        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = dbConnect;
