import React from "react";
import EmployeeEdit from "../Components/EmployeeEdit";

const EditEmployee = ({editData}) => {
  return (
    <div>
      <div className="container">
        <EmployeeEdit   editData={editData}/>
      </div>
    </div>
  );
};

export default EditEmployee;
