const { default: mongoose } = require("mongoose");
const Stafinfo = require("../Model/Staffinfo");
// const studentinfo = require("../Model/StudentInfo");
// const instructorinfo = require("../Model/InstructorInfo");

//get all staff
const getstaffinfos = async (req, res) => {
  const stafinfo = await Stafinfo.find({});
  res.status(200).json(stafinfo);
};

//get single staff
const getstaffinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such staff" });
  }

  const stafinfo = await Stafinfo.findById(id);

  if (!stafinfo) {
    return res.status(404).json({ error: "no such staff" });
  }

  res.status(200).json(stafinfo);
};

//create staff
const createstafinfo = async (req, res) => {
  const {
    fullname,
    phonenumber,
    emailaddress,
    residentaddress,
    id,
    staffposition,
  } = req.body;
  try {
    const stafinfo = await Stafinfo.create({
      fullname,
      phonenumber,
      emailaddress,
      residentaddress,
      id,
      staffposition,
    });
    res.status(200).json(stafinfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete staff

const deletestafinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such staff" });
  }

  const stafinfo = await Stafinfo.findOneAndDelete({ _id: id });

  if (!stafinfo) {
    return res.status(404).json({ error: "no such staff" });
  }

  res.status(200).json(stafinfo);
};

//update staff
const updatestafinfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such staff" });
  }

  const stafinfo = await Stafinfo.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!stafinfo) {
    return res.status(404).json({ error: "no such staff" });
  }

  res.status(200).json(stafinfo);
};

module.exports = {
  createstafinfo,
  getstaffinfo,
  getstaffinfos,
  deletestafinfo,
  updatestafinfo,
};
