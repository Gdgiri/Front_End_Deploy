import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetEmployee from "./Components/GetEmployee";
import AddEmployeeForm from "./Components/AddEmployeeForm";
import EditEmployeeForm from "./Components/EditEmployeeForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetEmployee />} />
        <Route path="/add" element={<AddEmployeeForm />} />
        <Route path="/update/:id" element={<EditEmployeeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
