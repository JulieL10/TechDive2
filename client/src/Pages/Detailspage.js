import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';
import '../App.css';

const ExamDetailPage = () => {
  const { examID } = useParams();
  const { exams } = useExamsContext();
  const [exam, setExam] = useState(null);

  useEffect(() => {
    const foundExam = exams.find((exam) => exam._id === examID); 
    setExam(foundExam);
  }, [exams, examID]);

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exam-details-container">
      <h2>Exam Details</h2>
      <div className="exam-details">
        <div className="exam-image">
          <img src={exam.image} alt={exam.examID} />
        </div>
        <div className="exam-info">
          <p><strong>Patient ID:</strong> {exam.patientID}</p>
          <p><strong>Exam ID:</strong> {exam.examID}</p>
          <p><strong>Key Findings:</strong> {exam.keyFindings}</p>
          <p><strong>Brixia Score:</strong> {exam.brixiaScore}</p>
          <p><strong>Age:</strong> {exam.age}</p>
          <p><strong>Sex:</strong> {exam.sex}</p>
          <p><strong>BMI:</strong> {exam.bmi}</p>
          <p><strong>Zip Code:</strong> {exam.zipCode}</p>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailPage;
