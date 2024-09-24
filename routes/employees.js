const express = require("express");
const router = express.Router();
const Employee = require("../models/employee")

router.get("/", async (req, res) => {
    try{
        const allEmployees = await Employee.find();
        // res.render("users", { allPatients, allEmployee }); // Pass data to the template
        res.render("employees", { allEmployees }); // Pass users data to the template
    }catch (err) {
      // res.status(500).send("Server Error"); // Handle errors
      res.render("employees", { });
  }
});

router.get("/:id/", async (req, res) => {
    try{
        const dEmployee = await Employee.find({employee_id: id});

        // res.render("users", { allPatients, allEmployee }); // Pass data to the template
        res.render("employeeForm", { dEmployee }); // Pass users data to the template
    }catch (err) {
      res.render("employeeForm", {});
  }
});

router.post("/addNew/", async (req, res) => {
    try{
        // const { username, password } = req.body
        const newEmployee = new Employee(req.body)
        await newEmployee.save();
        // return res.status(201).json({"message": "User Created!", "user": newUser})
        // json api return
        res.redirect('/employees/');
    }catch (err) {
    // res.status(500).send("Server Error"); // Handle errors
    res.render("employees", {});
  }
});

router.post("/update/:id/", async (req, res) => {
    try{
        const dEmployee = await Employee.findOneAndUpdate(
          {
            employee_id: id // search query
          },
          {
            email: 'theoutlander@live.com' // field:values to update
          },
          {
            new: true, // return updated data
            runValidators: true // validate before update
          }

        );

        // res.render("users", { allPatients, allEmployee }); // Pass data to the template
        res.render("employeeForm", { dEmployee }); // Pass users data to the template
    }catch (err) {
      res.render("employeeForm", {});
  }
});

router.post("/delete/:id/", async (req, res) => {
    try{
        const dEmployee = await Employee.findOneAndRemove(
          {
            employee_id: id // search query
          }
        );

        // res.render("users", { allPatients, allEmployee }); // Pass data to the template
        res.render("employeeForm", { dEmployee }); // Pass users data to the template
    }catch (err) {
      res.render("employeeForm", {});
  }
});


module.exports = router; // Export the router