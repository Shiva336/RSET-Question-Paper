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

//upload question papers
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

//get all question papers
router.get("/", async(req,res)=> {
  try{
    const papers =  await questionpaperModel.find({});  
    res.status(200).json(papers);
  }
  catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;