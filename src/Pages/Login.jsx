import { useState } from "react";
import swal from 'sweetalert';
import "./Login.css";

const Login = ({ setisLoggedin }) => {
  const [logindata, setLogindata] = useState({ email: "", password: "" });

  const handleClick = (e) => {
    e.preventDefault();

    if (
      logindata.email === "test123@gmail.com" &&
      logindata.password === "test123"
    ) {
      swal("Login Successful", "Congratulations", "success");
      setisLoggedin(true);
    }
     else {
      swal("Login Failed", "Wrong Email or Password", "error");
    }
  };

  const handleChange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  console.log(logindata);
  return (
    <div>
      <div className="contaniner">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-3">
            <h2>Admin Login</h2>
            <div className="form">
              <form action="">
                <div className="emailInput mt-3">
                  <label>Email</label> <br />
                  <input
                    className="form-control "
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="passwordInput mt-3">
                  <label>Password</label> <br />
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
              </form>
              <button
                type="button "
                onClick={handleClick}
                className="btn btn-primary mt-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
