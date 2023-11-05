const router = require("express").Router();
const questionpaperModel = require("../models/QuestionPaper");
const multer = require("multer")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.put("/upload", upload.single('pdf'), async (req,res)=> {
    console.log(req.body);

    const newPaper = new questionpaperModel({
        subject_name: req.body.name,
        subject_code: req.body.code,
        semester: req.body.sem,
        year: req.body.year,
        branch: req.body.branch,
        pdf: req.file
    });

    newPaper.save();
});

module.exports = router;