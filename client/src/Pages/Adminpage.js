// AdminPage.js
import AdminTable from "../components/AdminTable";
import Nav from "../components/NavBar";
import { useState } from 'react';
const AdminPage = () => {
  const [input, setInput] = useState('');

  return (
    <>
    <Nav input={input} setInput={setInput} />
    <AdminTable input={input} setInput={setInput}/>
    </>
    
    
  );
}

export default AdminPage;
