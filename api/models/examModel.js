const mongoose = require('mongoose');

const Schema = mongoose.Schema

const examSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    examID: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    keyFindings: {
        type: String,
        required: true
    },
    brixiaScore: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }


}, { timestamps: true })

module.exports = mongoose.model('ExamModel', examSchema)