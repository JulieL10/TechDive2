require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const examRoutes = require('./routes/exams')
const cors = require('cors');

// express app
const app = express()
app.use(cors({
    origin: ["http://localhost:3000", "https://medreport.onrender.com"]
}));
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



// routes
app.use('/api/exams', examRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error)
    })



