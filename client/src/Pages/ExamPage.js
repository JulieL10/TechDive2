import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

const ExamPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/exams/');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        
        const data = await response.json();
        setExams(data);
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Error loading data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <>
      <Table className='table' bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Exam ID</th>
            <th>Image</th>
            <th>Key Findings</th>
            <th>Brixia Score</th>
            <th>Age</th>
            <th>Sex</th>
            <th>BMI</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            exam && (
              <tr key={exam.examID}>
                <td>{exam.patientID}</td>
                <td>{exam.examID}</td>
                <td>
                  <img
                    src={exam.image}
                    alt={exam.examID}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>{exam.keyFindings}</td>
                <td>{exam.brixiaScore}</td>
                <td>{exam.age}</td>
                <td>{exam.sex}</td>
                <td>{exam.bmi}</td>
                <td>{exam.zipCode}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ExamPage;