import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployeeForm = () => {
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(
          `https://backend-deploy-axwa.onrender.com/api/getemployee/${id}`
        );
        const employee = res.data;
        setEmployeeFirstName(employee.employeeFirstName);
        setEmployeeLastName(employee.employeeLastName);
        setEmployeeEmail(employee.employeeEmail);
        setEmployeeDesignation(employee.employeeDesignation);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://backend-deploy-axwa.onrender.com/api/updateemployee/${id}`,
        {
          employeeFirstName,
          employeeLastName,
          employeeEmail,
          employeeDesignation,
        }
      );
      navigate("/"); // Redirect to the employee list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={employeeFirstName}
          onChange={(e) => setEmployeeFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={employeeLastName}
          onChange={(e) => setEmployeeLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={employeeEmail}
          onChange={(e) => setEmployeeEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Designation:</label>
        <input
          type="text"
          value={employeeDesignation}
          onChange={(e) => setEmployeeDesignation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployeeForm;
