// // AdminPage.js
// import React, { useState, useEffect } from 'react';
// import ExamTable from '../components/ExamTable';
// import { fetchExams, createExam, updateExam, deleteExam } from '../examApi';

// function AdminPage() {
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchExams();
//         setExams(data);
//       } catch (error) {
//         console.error('Error loading data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddExam = async (newExamData) => {
//     try {
//       const newExam = await createExam(newExamData);
//       setExams([...exams, newExam]);
//     } catch (error) {
//       console.error('Error creating exam:', error);
//     }
//   };

//   const handleEditExam = async (id, updatedFields) => {
//     try {
//       const updatedExam = await updateExam(id, updatedFields);
//       const updatedExams = exams.map(exam => (exam.id === id ? updatedExam : exam));
//       setExams(updatedExams);
//     } catch (error) {
//       console.error('Error updating exam:', error);
//     }
//   };

//   const handleDeleteExam = async (id) => {
//     try {
//       await deleteExam(id);
//       const updatedExams = exams.filter(exam => exam.id !== id);
//       setExams(updatedExams);
//     } catch (error) {
//       console.error('Error deleting exam:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Page</h1>
//       <button onClick={() => handleAddExam({ patientId: 'New', keyFindings: 'New', brixiaScore: 'New' })}>Create Exam</button>
//       <ExamTable exams={exams} onEditExam={handleEditExam} onDeleteExam={handleDeleteExam} />
//     </div>
//   );
// }

// export default AdminPage;
