import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';
import '../update.css'
import Nav from '../components/NavBar';

const UpdateExam = () => {
  const { id } = useParams(); // Get the exam ID from the URL params
  const navigate = useNavigate(); // Get the navigate function
  const { dispatch } = useExamsContext();
  const [exam, setExam] = useState(null);
  const [patientID, setPatientID] = useState('');
  const [examID, setExamID] = useState('');
  const [image, setImage] = useState('');
  const [keyFindings, setKeyFindings] = useState('');
  const [brixiaScore, setBrixiaScore] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [bmi, setBmi] = useState('');
  const [zipCode, setZipCode] = useState('');

  // Fetch exam details based on the ID
  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(`https://medreport-api.onrender.com/api/exams/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch exam details');
        }
        const data = await response.json();
        setExam(data);
        // Pre-fill fields with exam details
        setPatientID(data.patientID);
        setExamID(data.examID);
        setImage(data.image);
        setKeyFindings(data.keyFindings);
        setBrixiaScore(data.brixiaScore);
        setAge(data.age);
        setSex(data.sex);
        setBmi(data.bmi);
        setZipCode(data.zipCode);
      } catch (error) {
        console.error('Error fetching exam details:', error);
      }
    };

    fetchExamDetails();
  }, [id]);

  // Handle update exam
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement update logic here
    const updatedExam = {
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
    try {
      const response = await fetch(`https://medreport-api.onrender.com/api/exams/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedExam),
      });
      if (!response.ok) {
        throw new Error('Failed to update exam');
      }
      const data = await response.json();
      // Dispatch action to update exams context
      dispatch({ type: 'UPDATE_EXAM', payload: data });
      // Navigate to admin page
      navigate('/admin');
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  };

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <form className="update-exam" onSubmit={handleSubmit}>
        <h3>Update Exam</h3>

        <label>Patient ID</label>
        <input
          type="text"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />

        <label>Exam ID</label>
        <input
          type="text"
          value={examID}
          onChange={(e) => setExamID(e.target.value)}
        />

        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Key Findings</label>
        <input
          type="text"
          value={keyFindings}
          onChange={(e) => setKeyFindings(e.target.value)}
        />

        <label>Brixia Score</label>
        <input
          type="text"
          value={brixiaScore}
          onChange={(e) => setBrixiaScore(e.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Sex</label>
        <input
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />

        <label>BMI</label>
        <input
          type="number"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
        />

        <label>Zip Code</label>
        <input
          type="number"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

        <button type="submit">Update Exam</button>
      </form>
    </>
  );
};

export default UpdateExam;
