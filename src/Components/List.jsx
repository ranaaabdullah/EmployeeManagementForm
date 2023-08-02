import React, { useContext } from "react";
import ContextTodo from "../ContextApi/Context";
import './list.css'

function List({items }) {
  const {  handleEdit, handleDelete } =useContext(ContextTodo)

  console.log(items)
  const renderdata = items
    ? items.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.email}</td>
            <td>{item.salary}</td>
            <td>{item.date}</td>
            <td className="td"> 
              <button
                className="btn btn-outline-dark "
                onClick={() => {
                  handleEdit(item);
                }}
              >
                Edit
              </button>
              <button
                className="btn  btn-outline-dark "
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <div className="table mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Salary</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{renderdata}</tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
