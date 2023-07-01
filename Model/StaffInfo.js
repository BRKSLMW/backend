const mongoose = require("mongoose");

const staffschema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    emailaddress: {
      type: String,
      required: true,
      unique: true,
    },
    residentaddress: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    staffposition: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("staffinfo", staffschema);
