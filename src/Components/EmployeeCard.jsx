import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {employee.employeeFirstName} {employee.employeeLastName}
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {employee.employeeEmail}
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {employee.employeeDesignation}
        </h6>
        <Link to={`/update/${employee._id}`} className="btn btn-primary">
          Update
        </Link>
        <button
          onClick={onDelete}
          className="btn btn-danger"
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
