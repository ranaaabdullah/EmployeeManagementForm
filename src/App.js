import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { useContext} from "react";
import ContextTodo  from "./ContextApi/Context";

function App() {
  const{isLoggedIn, setisLoggedin} = useContext(ContextTodo);
  return (
    <div>
      {isLoggedIn && <Dashboard />}
      {!isLoggedIn && <Login setisLoggedin={setisLoggedin} />}
    </div>
  );
}

export default App;
