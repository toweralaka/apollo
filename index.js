require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const path = require("path");
const app = express();

// Connect to MongoDB
const connectDB = require("./config/database.js")
// initialize db
connectDB();

// define port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method')); // Allows PUT and DELETE requests
// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request for "${req.url}"`);
  next(); // Pass control to the next middleware
});

// Basic route
app.get("/", (req, res) => {
  // res.send("Hello, World!");
  res.render("home", {});
});
// Set EJS as the view engine
app.set("view engine", "ejs");
// // Set EJS as the template engine
// app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//include other routes
app.use("/employees", require("./routes/employees"));
app.use("/patients", require("./routes/patients"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
