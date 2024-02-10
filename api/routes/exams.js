const express = require('express');
const  {
    createExam,
    getExam,
    getExams,
    deleteExam,
    updateExam
} = require('../controllers/examController')
const router = express.Router();

//GET all Exams
router.get('/', getExams)
//GET a single Exam
router.get('/:id', getExam)
//POST a Exam
router.post('/', createExam)
//DELETE a Exam
router.delete('/:id', deleteExam)
//UPDATE a Exam
router.patch('/:id', updateExam)

module.exports=router