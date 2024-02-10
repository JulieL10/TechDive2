const Exam = require('../models/examModel');
const mongoose = require('mongoose')

// get all Exams
const getExams = async (req, res) => {
    const exams = await Exam.find({}).sort({createdAt: -1})
    res.status(200).json(exams)
}

// get a single exam
const getExam = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such exam'})
    }

    const exam = await Exam.findById(id) 

    if(!exam) {
        return res.status(400).json({error: 'No such exam'})
    }

    res.status(200).json(exam)
}

// create new exam
const createExam = async (req, res) => {
    const {patientID, examID, image, keyFindings, brixiaScore, age, sex, bmi, zipCode
    } = req.body

    //add doc to db
    try {
        const exam = await Exam.create({patientID, examID, image, keyFindings, brixiaScore, age, sex, bmi, zipCode
        })
        res.status(200).json(exam)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a exam
const deleteExam = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such exam'})
    }

    const exam = await Exam.findOneAndDelete({_id: id})

    if(!exam) {
        return res.status(400).json({error: 'No such exam'})
    }

    res.status(200).json(exam)
}
// update a exam
const updateExam = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such exam'})
    }

    const exam = await Exam.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!exam) {
        return res.status(400).json({error: 'No such exam'})
    }

    res.status(200).json(exam)

};


module.exports = {
    createExam,
    getExams,
    getExam,
    deleteExam,
    updateExam
}