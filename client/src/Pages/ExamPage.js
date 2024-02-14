import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
// import Nav from '../components/NavBar';

const ExamPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/exams');
        if (!response.ok) {
          throw new Error('Request failed');
        }

        // Parsing the response as JSON
        const data = await response.json();
        
        // Logging the received data
        console.log("Received the data: ", data)
        
        // Setting exams state with received data
        setExams(data);
        
        // Logging that exams were set
        console.log("Exams were set. Set Exams: ", data)
      } catch (error) {
        // Logging and setting error state if fetch fails
        console.error('Error loading data:', error);
        setError('Error loading data');
      } finally {
        // Setting loading state to false after fetching
        setLoading(false);
      }
    };

    // Calling fetchData function when component mounts
    fetchData();
  }, []);

  // Rendering loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Rendering error message if fetch fails
  if (error) {
    return <div>{error}</div>;
  }

  // Rendering table with exam data
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
            // Rendering each exam as a table row
            exam ? (
              <tr key={exam.examID}>
                <td>{exam.patientID}</td>
                <td>{exam.examID}</td>
                <td>
                  {/* Rendering image if available */}
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
            ) : null
          ))}
        </tbody>
      </Table>
    </>
  );
  
};

export default ExamPage;
