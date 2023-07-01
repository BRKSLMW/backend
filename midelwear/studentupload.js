const multer = require("multer");
const studentinfo = require("../Model/StudentInfo");

const studentupload = async (req, res, next) => {
  const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: Storage }).single("idimage");

  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const idimage = new studentinfo({
        Studentphoto: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });
      idimage
        .save()
        .then(() => res.send("image successfuly uploaded"))
        .catch((err) => console.log(err));
    }
  });
};

module.exports = studentupload;
