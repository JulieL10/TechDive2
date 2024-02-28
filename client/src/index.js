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
import UpdateExam from './Pages/UpdatePage'; // Import UpdateExam component
import ExamDetailPage from './Pages/Detailspage';
import { ExamsContextProvider } from './context/ExamContext';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/create-exam",
    element: <Create />,
  },
  {
    path: "/update-exam/:id", // Update the path to include ID parameter
    element: <UpdateExam />,
  },
  {
    path: "/exam-details/:id",
    element: <ExamDetailPage />
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

reportWebVitals();
