import React, { useEffect , useState} from 'react';
import Table from 'react-bootstrap/Table'; // added react strap library for table -Miguel
import './App.css';
import axios from 'axios'

//This component is just a simple react-strap table that i just grabbed from the documentation -Miguel
export const BasicExample = () => {

  const api = axios.create({
    baseURL: 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16406504'
  })

  const [data , setData] = useState([])


  useEffect(() =>  {
    api.get('/').then( res => {
      console.log(res.data);
    })
    .then( data => {
      setData(data);
    })
  }, [])
  
  
  // const { response } = useApi({path: 'czi-covid-lypkrzry4q-uc.a.run.app/api/exams'})

  // if(!response){
  //   return <div>Loading...</div>
  // }

  // if(!response.success){
  //   <div>Error loading data</div>
  // }

  // const { exams } = response; 


  return (
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
        <tr>
          <td>COVID-19-AR-16406513</td>
          <td>Exam-1</td>
          <td>
            <img
              src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_PORTABLE_2.png"
              alt="Profile"
              style={{ width: '50px', height: '50px' }}
            />
          </td>
          <td>The lungs are free of air space disease</td>
          <td>1,2,3,4</td>
          <td>44</td>
          <td>M</td>
          <td>33.3</td>
          <td>722</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>{data}</td>
        </tr>
      </tbody>
    </Table>


    // <Table className='table' bordered hover responsive size="sm">
    //   <thead>
    //     <tr>
    //       <th>Patient ID</th>
    //       <th>Exam ID</th>
    //       <th>Image</th>
    //       <th>Key Findings</th>
    //       <th>Brixia Score</th>
    //       <th>Age</th>
    //       <th>Sex</th>
    //       <th>BMI</th>
    //       <th>Zip Code</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {exams.map((exam) => (
    //       <tr key={exam._id}>
    //         <td>{exam.patientID}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
  );
}

export default BasicExample;