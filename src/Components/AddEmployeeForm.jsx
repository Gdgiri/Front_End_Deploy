import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployeeForm = () => {
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [error, setError] = useState(""); // For capturing error messages
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make sure the endpoint URL is correct
      const res = await axios.post(
        "https://backend-deploy-axwa.onrender.com/api/createemployee",
        {
          employeeFirstName,
          employeeLastName,
          employeeEmail,
          employeeDesignation,
        }
      );

      if (res.status === 200 || res.status === 201) {
        // Checking for success response codes
        console.log("Employee added:", res.data);
        navigate("/"); // Redirect to the employee list
      } else {
        // Handle non-200 responses
        setError("Failed to add employee. Please try again.");
      }
    } catch (err) {
      console.error("Error adding employee:", err);
      setError("An error occurred while adding the employee.");
    }
  };

  return (
    <div>
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
        <button type="submit">Add Employee</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddEmployeeForm;
