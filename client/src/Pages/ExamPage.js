import ExamTable from '../components/ExamTable';
import { useState } from 'react';
import '../App.css';
import Nav from '../components/NavBar'
const ExamPage = () => {
  const [input, setInput] = useState('');
  return (
    <>
    <Nav input={input} setInput={setInput} />
    <ExamTable input={input}/>
    </>
      
  );
};

export default ExamPage;
