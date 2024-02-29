import React, { useState } from "react";
import { useExamsContext } from "../hooks/useExamsContext";
import { useNavigate } from "react-router-dom";
import "../Create.css"; // Import CSS file for styling
import Nav from "../components/NavBar";

const Create = () => {
  const { dispatch } = useExamsContext();
  const [patientID, setPatientID] = useState("");
  const [examID, setExamID] = useState("");
  const [image, setImage] = useState("");
  const [keyFindings, setKeyFindings] = useState("");
  const [brixiaScore, setBrixiaScore] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [bmi, setBmi] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([])
  const navigate = useNavigate();
  const handleClick = () => navigate("/admin");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exam = {
      patientID,
      examID,
      image,
      keyFindings,
      brixiaScore,
      age,
      sex,
      bmi,
      zipCode,
    };

    const response = await fetch("https://medreport-api.onrender.com/api/exams/", {
      method: "POST",
      body: JSON.stringify(exam),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setPatientID("");
      setExamID("");
      setKeyFindings("");
      setBrixiaScore("");
      setImage("");
      setAge("");
      setSex("");
      setBmi("");
      setZipCode("");
      setError(null);
      console.log("new exam added", json);
      setEmptyFields([])
      dispatch({ type: "CREATE_EXAM", payload: json });
      handleClick();
    }
  };

  return (
    <>
    <Nav/>
    <div className="create-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <h3>Patient Entry</h3>

        <div className="form-group">
          <label>Patient Id</label>
          <input
            type="text"
            onChange={(e) => setPatientID(e.target.value)}
            value={patientID}
            className={emptyFields.includes('patientID') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Exam Id</label>
          <input
            type="text"
            onChange={(e) => setExamID(e.target.value)}
            value={examID}
            className={emptyFields.includes('examID') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Image Url</label>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className={emptyFields.includes('image') ? 'error' : ''}
            
          />
        </div>

        <div className="form-group">
          <label>Key Findings</label>
          <input
            type="text"
            onChange={(e) => setKeyFindings(e.target.value)}
            value={keyFindings}
            className={emptyFields.includes('keyFindings') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Brixia Score</label>
          <input
            type="text"
            onChange={(e) => setBrixiaScore(e.target.value)}
            value={brixiaScore}
            className={emptyFields.includes('brixiaScore') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className={emptyFields.includes('age') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Sex</label>
          <input
            type="text"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
            className={emptyFields.includes('sex') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Bmi</label>
          <input
            type="number"
            onChange={(e) => setBmi(e.target.value)}
            value={bmi}
            className={emptyFields.includes('bmi') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
            className={emptyFields.includes('zipCode') ? 'error' : ''}
          />
        </div>

        <button className="submit-button">Add Exam</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    </>
  );
};

export default Create;
