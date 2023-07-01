const express = require("express");
const router = express.Router();
const {
  createstafinfo,
  getstaffinfo,
  getstaffinfos,
  deletestafinfo,
  updatestafinfo,
} = require("../Controlle/staffcontroller");
const {
  createinstructorinfo,
  getinstructorinfo,
  getinstructorinfos,
  deleteinstructorinfo,
  updateinstructorinfo,
} = require("../Controlle/instructorcontroller");
const {
  createstudentinfo,
  getstudentinfo,
  getstudentinfos,
  deletestudentinfo,
  updatestudentinfo,
} = require("../Controlle/studentcontroller");

const requireAuth = require("../midelwear/requireAuth");

const studentupload = require("../midelwear/studentupload");

//require auth for all routes

//router.use(requireAuth);

//staff
router.get("/staff", getstaffinfos);

router.get("/staff/:id", getstaffinfo);

router.post("/staff", createstafinfo);

router.delete("/staff/:id", deletestafinfo);

router.patch("/staff/:id", updatestafinfo);

//instructor
router.get("/instructor", getinstructorinfos);

router.get("/instructor/:id", getinstructorinfo);

router.post("/instructor", createinstructorinfo);

router.delete("/instructor/:id", deleteinstructorinfo);

router.patch("/instructor/:id", updateinstructorinfo);

//student

router.get("/student", getstudentinfos);

router.get("/student/:id", getstudentinfo);

router.post("/student", createstudentinfo);

router.delete("/student/:id", deletestudentinfo);

router.patch("/student/:id", updatestudentinfo);

module.exports = router;
