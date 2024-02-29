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

    let emptyFields = []

    if(!patientID) {
        emptyFields.push('patientID')
    }
    if(!examID) {
        emptyFields.push('examID')
    }
    if(!image) {
        emptyFields.push('image')
    }
    if(!keyFindings) {
        emptyFields.push('keyFindings')
    }
    if(!brixiaScore) {
        emptyFields.push('brixiaScore')
    }
    if(!age) {
        emptyFields.push('age')
    }
    if(!sex) {
        emptyFields.push('sex')
    }
    if(!bmi) {
        emptyFields.push('bmi')
    }
    if(!zipCode) {
        emptyFields.push('zipCode')
    }
    
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

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
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid exam ID' });
    }

    const updates = req.body;

    try {
        const updatedExam = await Exam.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedExam) {
            return res.status(404).json({ error: 'Exam not found' });
        }

        res.status(200).json(updatedExam);
    } catch (error) {
        console.error('Error updating exam:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    createExam,
    getExams,
    getExam,
    deleteExam,
    updateExam
}