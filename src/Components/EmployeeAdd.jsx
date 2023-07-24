import React, { useContext, useState } from "react";
import swal from 'sweetalert';
import  ContextTodo  from "../ContextApi/Context";


const EmployeeAdd = () => {
  const empty = { fname: "", lname: "", email: "", salary: "", date: "" };
  const [user, setUser] = useState(empty);

  const {addEmpData, handleCancelAdd} = useContext(ContextTodo)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    handleCancelAdd();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 333);
    const newdata = { ...user, id };
    addEmpData(newdata);
  setUser(empty)
  swal("Added Successful", "Congratulations", "success");

  handleCancelAdd();
  };

  return (
    <div>
      <div className="row mt-4">
        <div className="col-1"></div>
        <div className="col-10">
          <h2>Add Employee</h2>
          <div className="addForm">
            <form action="" onSubmit={handleSubmit}>
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
              <button className="btn btn-primary mt-4   " >ADD</button>
              <button
                className="btn btn-outline-dark mt-4  mx-2 px-4  "
                onClick={handleCancel}
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

export default EmployeeAdd;
