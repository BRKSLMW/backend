const { default: mongoose } = require("mongoose");
const Instructorinfo = require("../Model/InstructorInfo");

//get all instructor
const getinstructorinfos = async (req, res) => {
  const instructorinfo = await Instructorinfo.find({});
  res.status(200).json(instructorinfo);
};

//get single instructor
const getinstructorinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such instructor" });
  }

  const instructorinfo = await Instructorinfo.findById(id);

  if (!instructorinfo) {
    return res.status(404).json({ error: "no such instructor" });
  }

  res.status(200).json(instructorinfo);
};

//create instructor
const createinstructorinfo = async (req, res) => {
  const {
    fullname,
    Instructorstphoto,
    phonenumber,
    emailaddress,
    residentaddress,
    id,
    classassigned,
    startingmonth,
    endingmonth,
  } = req.body;
  try {
    const instructorinfo = await Instructorinfo.create({
      fullname,
      Instructorstphoto,
      phonenumber,
      emailaddress,
      residentaddress,
      id,
      classassigned,
      startingmonth,
      endingmonth,
    });
    res.status(200).json(instructorinfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete instructor

const deleteinstructorinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such instructor" });
  }

  const instructorinfo = await Instructorinfo.findOneAndDelete({ _id: id });

  if (!instructorinfo) {
    return res.status(404).json({ error: "no such instructor" });
  }

  res.status(200).json(instructorinfo);
};

//update instructor
const updateinstructorinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such instructor" });
  }

  const instructorinfo = await Instructorinfo.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!instructorinfo) {
    return res.status(404).json({ error: "no such instructor" });
  }

  res.status(200).json(instructorinfo);
};

module.exports = {
  createinstructorinfo,
  getinstructorinfo,
  getinstructorinfos,
  deleteinstructorinfo,
  updateinstructorinfo,
};
