const router = require("express").Router();
const questionpaperModel = require("../models/QuestionPaper");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


router.put("/upload", upload.single('file'), async (req,res)=> {
    console.log(req.file.buffer);

    const newPaper = new questionpaperModel({
        subject_name: req.body.name,
        subject_code: req.body.code,
        semester: req.body.sem,
        year: req.body.year,
        branch: req.body.branch,
        pdf: req.file.buffer
    });

     newPaper.save();
});

module.exports = router;