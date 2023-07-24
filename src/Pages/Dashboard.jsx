import React, { useEffect } from "react";

import AddEmployee from "../Pages/AddEmployee";
import EditEmployee from "../Pages/EditEmployee";
import List from "../Components/List";
import { useContext } from "react";
import ContextTodo from "../ContextApi/Context";

const Dashboard = () => {
  const {
    isAdded,
    isEdit,
    handleAddChange,
    handleClick,
    editData,
    empData,
  fetchEmpData
  } = useContext(ContextTodo);

  useEffect(() => {
    fetchEmpData()
    
    // eslint-disable-next-line
  }, []);

  console.log(empData);
  if (!isAdded && !isEdit)
    return (
      <div>
        <div className="container my-4">
          <h2>Employee Management Software</h2>
          <div className="buttons mt-4">
            <button className="btn btn-primary " onClick={handleAddChange}>
              ADD Employee
            </button>
            <button
              className="btn  btn-outline-dark mx-2 px-4 "
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
          <List items={empData} />
        </div>
      </div>
    );

  if (isAdded) {
    return <AddEmployee />;
  }
  if (isEdit) {
    return (
      <EditEmployee
       
        editData={editData}
      />
    );
  }
};

export default Dashboard;
