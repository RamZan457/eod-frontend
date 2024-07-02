import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  DEODashbaord,
  Schools,
  Teachers,
  TranferRequests,
} from "./DEO dasboard/pages";

import {
  Teacherdashboard,
  RequestTransfer,
  TeacherProfile,
  ViewSchools,
  ViewTeachers
} from "./Teacher Dashboard/pages";

import "./App.css";

import TeacherSignup from './pages/authentication/teacher/TeacherSignup';
import TeacherSignin from './pages/authentication/teacher/TeacherSignin';
import DeoSignup from './pages/authentication/DEO/DeoSignup';
import DeoSignin from './pages/authentication/DEO/DeoSignin';
import Home from "./pages/Home";
import Request from "./pages/Request";



const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard  */}
        <Route path="/" element={<Home />} />
        <Route path="/teacher-signup" element={<TeacherSignup />} />
        <Route path="/teacher-signin" element={<TeacherSignin />} />
        <Route path="/deo-signup" element={<DeoSignup />} />
        <Route path="/deo-signin" element={<DeoSignin />} />
        <Route path="/deodashboard" element={<DEODashbaord />} />
        <Route path="/teacher-dashboard" element={<Teacherdashboard />} />
  
        {/* pages  */}
        <Route path="/schools" element={<Schools />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/transfer-requests" element={<TranferRequests />} />

        {/* teacher dashboard  */}
        <Route path="/Request-Tranfer" element={<RequestTransfer />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
        <Route path="/view-schools" element={<ViewSchools />} />
        <Route path="/view-teachers" element={<ViewTeachers />} />
        {/* <Route path = "/submit-request" element = {<Request/>}/> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;


