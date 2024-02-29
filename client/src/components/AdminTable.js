import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';
import Table from 'react-bootstrap/Table';
import editImage from '../images/edit.png';
import deleteImage from '../images/delete.png'


import '../App.css';

const AdminTable = ({ input }) => {
  const { exams, dispatch } = useExamsContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('AdminTable: Fetching exams...');
    const fetchData = async () => {
      try {
        const response = await fetch('https://medreport-api.onrender.com/api/exams/');
        if (!response.ok) {
          throw new Error('Failed to fetch exams');
        }
        const data = await response.json();
        dispatch({ type: 'SET_EXAMS', payload: data });
        setLoading(false);
      } catch (error) {
        console.error('AdminTable: Error loading data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [input, dispatch]);

  const handleDelete = async (examID, e) => {
    e.stopPropagation();
    const response = await fetch(`https://medreport-api.onrender.com/api/exams/${examID}`, {
      method: 'DELETE'
    });
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: 'DELETE_EXAM', payload: json });
    }
  };

  const handleRowClick = (examID, e) => {
    if (!e.target.closest('a')) {
      navigate(`/exam-details/${examID}`);
    }
  };
  const filterExams = exams.filter((exam) =>
    input === '' ? true : exam.patientID.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div className="admin-table-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : filterExams.length > 0 ? (
        <Table className="adminTable" bordered hover responsive size="sm">
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterExams.map((exam) => (
              exam && (
                <tr key={exam._id} onClick={(e) => handleRowClick(exam._id, e)}>
                  <td>{exam.patientID}</td>
                  <td>{exam.examID}</td>
                  <td>
                    <img
                      src={exam.image}
                      alt={exam.examID}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td className="keyFindingsAdmin">{exam.keyFindings}</td>
                  <td>{exam.brixiaScore}</td>
                  <td>{exam.age}</td>
                  <td>{exam.sex}</td>
                  <td>{exam.bmi}</td>
                  <td>{exam.zipCode}</td>
                  <td>
                    <Link to={`/update-exam/${exam._id}`}>
                      <img src={editImage} alt="Edit" />
                    </Link>
                  </td>
                  <td>
                    <span className='deleteButton' onClick={(e) => handleDelete(exam._id, e)}>
                      <img src={deleteImage} alt="Delete" />
                    </span>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="no-matching-exams">No matching exams found.</div>
      )}
    </div>
  );
};

export default AdminTable;
