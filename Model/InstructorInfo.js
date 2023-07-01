const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instructorschema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    Instructorstphoto: {
      data: Buffer,
      contentType: String,
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
    classassigned: {
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

module.exports = mongoose.model("instructorinfo", instructorschema);
