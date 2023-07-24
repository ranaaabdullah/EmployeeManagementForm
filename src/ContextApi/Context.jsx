import { createContext, useState } from "react";
import swal from "sweetalert";


const ContextTodo = createContext();
  
function TodoForm ({children}) {

    // Functions for App.js
    const [isLoggedIn, setisLoggedin] = useState(false);

    const handleLogOut = () => {
      setisLoggedin(false);
    };

    //Function on Dashborad.js
    const [isAdded, setIsAdded] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [empData, setEmpData] = useState([]);
    const [editData, setEditData] = useState([]);
  
    const handleEdit = (data) => {
      console.log(data);
      setEditData(data);
      setIsEdit(true);
    };
  
    const handleDelete = (id) => {
      const updatedData = empData.filter((employe) => {
        return employe.id !== id;
      });
    
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Deleted", "User have been deleted", "success");
          setEmpData(updatedData);
          // remove item in local storage using the ID of employee to be deleted
          localStorage.setItem("user", JSON.stringify(updatedData));
          }
      });
    };
  
  
  
    const handleEditEmployee = (id, EmpUpdated) => {
      let updatedData = empData.map((item) => {
        if (item.id === id) {
          return EmpUpdated;
        }
  
        return item;
      });
      setEmpData(updatedData);
      localStorage.setItem("user", JSON.stringify(updatedData));
    };

    const fetchEmpData = () =>{
      const data = JSON.parse(localStorage.getItem("user"));
      if(!data)
        return;
      else
        setEmpData(data);
    }
  
    const addEmpData = (data) => {
      setEmpData([...empData, data]);
      console.log(empData);
      localStorage.setItem("user", JSON.stringify([...empData, data]));
    };

    console.log(empData)
  
    const handleAddChange = () => {
      setIsAdded(true);
    };
    const handleClick = () => {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to Logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willLogout) => {
        if (willLogout) {
          swal("Logout", "You have been logout", "success");
          handleLogOut();
        }
      });
    };
  
    const handleCancelAdd = () => {
      setIsAdded(false);
    };
  
    const handleCancelEdit = () => {
      setIsEdit(false);
    };

    const values = {isLoggedIn,setisLoggedin,handleLogOut,isAdded,
        isEdit,handleAddChange,handleClick,handleDelete,
        handleEdit,addEmpData,handleEditEmployee,handleCancelEdit,
        editData,empData,handleCancelAdd,setEmpData ,fetchEmpData}
    return (
        <ContextTodo.Provider value={values}>
            {children}
        </ContextTodo.Provider>
    )
}
export {TodoForm}
export default ContextTodo;