import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard"; // Component to display employee details

const GetEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "https://backend-deploy-axwa.onrender.com/api/getallemployee"
      );
      setEmployees(res.data.result[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backend-deploy-axwa.onrender.com/api/deleteemployee/${id}`
      );
      fetchEmployees(); // Refresh the list after deletion
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Employee</Link>
      </nav>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Employee List</h1>
          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              onDelete={() => handleDelete(employee._id)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default GetEmployee;
