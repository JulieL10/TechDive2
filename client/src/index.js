import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ExamPage from './Pages/ExamPage';
import Create from './Pages/CreatePage';
import reportWebVitals from './reportWebVitals';
import AdminPage from './Pages/Adminpage';
import { ExamsContextProvider } from './context/ExamContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/create-exam",
    element: <Create />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ExamsContextProvider>
      <RouterProvider router={router} />
    </ExamsContextProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
