import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Login Page Import
import Login from "./users/shared/Login";

//Doctor Page Imports
import Doctordashboard from './users/Dashboards/Doctordashboard';

//Patient Page Imports
import PatientDashboard from './users/Dashboards/PatientDashboard';

//Admin Page Imports
import AdminDashboard from './users/Dashboards/AdminDashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/userrole/:roleid/dashboard/doctor/' element={<Doctordashboard />} />
          <Route path='/userrole/:roleid/dashboard/patient/' element={<PatientDashboard />} />
          <Route path='/userrole/:roleid/dashboard/admin/' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
