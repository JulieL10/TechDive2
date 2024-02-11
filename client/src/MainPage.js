import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

const BasicExample = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    //Fetaching Data with api
    const fetchData = async () => {
      try {
        const response = await fetch('/api/exams');
        if (!response.ok) {
          throw new Error('Request failed');
        }


        //checks if data is in the correct format before setting the state. -Miguel
        const data = await response.json();
        
        console.log("Recieved the data: ", data)
        let i = 0;
        console.log(data.length)
        setExams(data);
        console.log("In the While Loop");
          if (data && data[i]) {
            setExams(data);
            console.log("The Exams were set. Set Exams: ", data)
          } else {
              throw new Error('Data format is incorrect');
          }
     } catch (error) {
        console.error('Error loading data:', error);
        setError('Error loading data');
      } finally {
        //when api is fully loaded the loading div will disapear and the state will be false. -Miguel
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //checks if loading is true or not
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    //mapping through the exam objects and picking out the values we want and creating table date for each one. -Miguel
    //using a conditional statement within the map because some 'exams' are null and will create a bug. =Miguel
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
          exam ? (
            <tr key={exam.examID}>
              <td>{exam.patientID}</td>
              <td>{exam.examID}</td>
              {/* <td>
                <img
                  src={`${exam.image}`}
                  alt={`${exam.examID}`}
                  style={{ width: '50px', height: '50px' }}
                />
              </td> */}
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
  );
};

export default BasicExample;
