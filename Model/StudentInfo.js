const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentschema = new Schema(
  {
    Studentphoto: {
      name: String,
      contentType: String,
      data: Buffer,
    },
    fisrtname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      possibleValues: ["male", "female"],
    },
    dateofbirth: {
      type: Date,
      required: true,
      default: Date.now,
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
    password: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    classenrollment: {
      type: String,
      required: true,
    },
    classschedule: {
      type: String,
      required: true,
    },
    startingmonth: {
      type: Date,
      required: true,
      default: Date.now,
    },
    endingmonth: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Studentinfo", studentschema);
