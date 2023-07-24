import React, { useContext, useState } from "react";
import ContextTodo from "../ContextApi/Context";


const EmployeeEdit = ({editData }) => {
  const {handleCancelEdit, handleEditEmployee} = useContext(ContextTodo)
  const preData = {
    id: editData.id,
    fname: editData.fname,
    lname: editData.lname,
    email: editData.email,
    salary: editData.salary,
    date: editData.date,
  };
  const [user, setUser] = useState(preData);

  const handleClick = () => {
    handleCancelEdit();
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("first");
    handleEditEmployee(user.id, user);
    handleCancelEdit();
  };
  return (
    <div>
      <div className="row mt-4">
        <div className="col-1"></div>
        <div className="col-10">
          <h2>Edit Employee</h2>
          <div className="addForm">
            <form action="" onSubmit={handleEditSubmit}>
              <div className="firstName mt-3">
                <label htmlFor="">First Name </label> <br />
                <input
                  value={user.fname}
                  type="text"
                  className="form-control"
                  name="fname"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <div className="lastName mt-3">
                <label htmlFor="">Last Name </label>
                <br />
                <input
                  value={user.lname}
                  type="text"
                  className="form-control"
                  name="lname"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <div className="email mt-3">
                <label htmlFor="">Email</label>
                <br />
                <input
                  value={user.email}
                  type="email"
                  className="form-control"
                  name="email"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <div className="salary mt-3">
                <label htmlFor="">Salary ($) </label>
                <br />
                <input
                  value={user.salary}
                  type="number"
                  className="form-control"
                  name="salary"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <div className="date mt-3">
                <label htmlFor="">Date</label>
                <br />
                <input
                  value={user.date}
                  type="date"
                  className="form-control"
                  name="date"
                  id=""
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary mt-4 " type="submit">
                Update
              </button>
              <button
                className="btn btn-outline-dark mt-4  mx-2 px-4  "
                onClick={handleClick}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;
