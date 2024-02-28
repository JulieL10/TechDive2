import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';
import "./Details.css";
import Nav from '../components/NavBar';

const ExamDetails = () => {
  const { id } = useParams();
  const { exams } = useExamsContext();
  const navigate = useNavigate();
  const [examDetails, setExamDetails] = useState(null);

  // Find the exam with the matching ID
  const exam = exams.find((exam) => exam._id === id);

  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/exams/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch exam details');
        }
        const data = await response.json();
        setExamDetails(data);
      } catch (error) {
        console.error('Error fetching exam details:', error);
      }
    };

    // Call the fetchExamDetails function if the exam with the given ID is not available in the exams context
    if (!exam && !examDetails) {
      fetchExamDetails();
    }
  }, [id, exam, examDetails]); // Include exam and examDetails in the dependency array

  if (!exam && !examDetails) {
    return <div>Loading...</div>;
  }

  // Use the exam from local state if available, otherwise use the exam from context
  const examToShow = examDetails || exam;

  return (
    <>
      <Nav/>
      <div className="exam-details-container">
        <h3>Exam Details</h3>
        <div className="exam-details">
          <div className="image-container">
            <img src={examToShow.image} alt={examToShow.examID} />
          </div>
          <div className="details-container">
            <p><strong>Patient ID:</strong> {examToShow.patientID}</p>
            <p><strong>Exam ID:</strong> {examToShow.examID}</p>
            <p><strong>Key Findings:</strong> {examToShow.keyFindings}</p>
            <p><strong>Brixia Score:</strong> {examToShow.brixiaScore}</p>
            <p><strong>Age:</strong> {examToShow.age}</p>
            <p><strong>Sex:</strong> {examToShow.sex}</p>
            <p><strong>BMI:</strong> {examToShow.bmi}</p>
            <p><strong>Zip Code:</strong> {examToShow.zipCode}</p>
            <div className="button-container">
              <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamDetails;
