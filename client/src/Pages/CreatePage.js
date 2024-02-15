import { useState } from "react"

const Create = () => {
    const [patientID, setPatientID] = useState('');
    const [examID, setExamID] = useState('');
    const [image, setImage] = useState('');
    const [keyFindings, setKeyFindings] = useState('');
    const [brixiaScore, setBrixiaScore] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [bmi, setBmi] = useState('');
    const [zipCode, setZipCode] = useState('');

    return (
        <form className="create">
            <h3>Patient Entry</h3>

            <label>Patient Id</label>
            <input
                type="text"
                onChange={(e) => setPatientID(e.target.value)}
                value={patientID}
            />

            <label>Exam Id</label>
            <input
                type="text"
                onChange={(e) => setExamID(e.target.value)}
                value={examID}
            />
            <label>Image Url</label>
            <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />
            <label>Key Findings</label>
            <input
                type="text"
                onChange={(e) => setKeyFindings(e.target.value)}
                value={keyFindings}
            />
            <label>Brixia Score</label>
            <input
                type="text"
                onChange={(e) => setBrixiaScore(e.target.value)}
                value={brixiaScore}
            />
            <label>Age</label>
            <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />
            <label>Sex</label>
            <input
                type="text"
                onChange={(e) => setSex(e.target.value)}
                value={sex}
            />
            <label>Bmi</label>
            <input
                type="text"
                onChange={(e) => setBmi(e.target.value)}
                value={bmi}
            />
            <label>Zip Code</label>
            <input
                type="text"
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
            />


        </form>
    )
    
}

export default Create