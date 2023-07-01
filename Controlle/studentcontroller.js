const Studentinfo = require("../Model/StudentInfo");
const mongoose = require("mongoose");

//get all student
const getstudentinfos = async (req, res) => {
  const studentinfo = await Studentinfo.find({});
  res.status(200).json(studentinfo);
};

//get single student
const getstudentinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const studentinfo = await Studentinfo.findById(id);

  if (!studentinfo) {
    return res.status(404).json({ error: "no such student" });
  }

  res.status(200).json(studentinfo);
};

//create student
const createstudentinfo = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    Studentphoto,
    dateofbirth,
    phonenumber,
    emailaddress,
    residentaddress,
    id,
    password,
    department,
    classenrollment,
    classschedule,
    startingmonth,
    endingmonth,
  } = req.body;
  try {
    const studentinfo = await Studentinfo.create({
      firstname,
      lastname,
      gender,
      Studentphoto,
      dateofbirth,
      phonenumber,
      emailaddress,
      residentaddress,
      id,
      password,
      department,
      classenrollment,
      classschedule,
      startingmonth,
      endingmonth,
    });

    res.status(200).json(studentinfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete student

const deletestudentinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const studentinfo = await Studentinfo.findOneAndDelete({ _id: id });

  if (!studentinfo) {
    return res.status(404).json({ error: "no such student" });
  }

  res.status(200).json(studentinfo);
};

//update student
const updatestudentinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const studentinfo = await Studentinfo.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!studentinfo) {
    return res.status(404).json({ error: "no such student" });
  }

  res.status(200).json(studentinfo);
};

module.exports = {
  createstudentinfo,
  getstudentinfo,
  getstudentinfos,
  deletestudentinfo,
  updatestudentinfo,
};
