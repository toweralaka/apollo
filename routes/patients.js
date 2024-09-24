const express = require("express");
const router = express.Router();
const Patient = require("../models/patient")

router.get("/", async (req, res) => {
    try{
        const allPatients = await Patient.find();
        res.render("patients", { allPatients }); // Pass users data to the template
    }catch (err) {
      console.log(err)
      const allPatients = []
      res.render("patients", { allPatients });
  }
});

router.get("/:id/", async (req, res) => {
    try{
        const dPatient = await Patient.findById();
        res.render("patientForm", { dPatient }); // Pass users data to the template
    }catch (err) {
      res.render("patientForm", {});
  }
});

router.post("/addNew/", async (req, res) => {
    try{
        const newPatient = new Patient(req.body)
        await newPatient.save();
        res.redirect('/patients/');
    }catch (err) {
      if (err.code === 11000) {
            // Duplicate key error
            console.log("Duplicate key error: ", err.message);
            res.status(400).render("patients", {
                error: `A patient with the ${JSON.stringify(Object.keys(err.keyValue))} information already exists.`,
                allPatients: await Patient.find() // Fetch all patients to render
            });
          }
      console.log(err)
      const allPatients = await Patient.find();
      res.render("patients", { allPatients, err });
  }
});

router.post("/delete/:id/", async (req, res) => {
    try{
        await Patient.findByIdAndDelete(req.params.id)
        // await Patient.findOneAndRemove(
        //   {
        //     patient_id: req.params.patient_id // search query
        //   }
        // );

        res.redirect("/patients/");
    }catch (err) {
      console.log(err)
      const allPatients = []
      res.render("patients", { allPatients });
  }
});

module.exports = router; // Export the router