import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/src/collapse.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/auth/auth.api";

function Login(props: any) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // props.onSubmit(email,pass);
    const status = await login(email, pass);
    if (status === "success") {
      navigate("/");
    } else {
      alert(status);
    }
  };

  const validateForm = () => email.length && pass.length;

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
          <div className="card my-5">
            <form
              data-testid="login-form"
              className="card-body cardbody-color p-lg-5"
              style={{ backgroundColor: "#ebf2fa" }}
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  data-testid="email-input"
                  type="text"
                  name="email"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // props.onEmailChange? props.onEmailChange(e.target.value):()=>null
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  data-testid="password-input"
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    // props.onPasswordChange? props.onPasswordChange(e.target.value):null;
                  }}
                />
              </div>
              <div className="text-center">
                <button
                  data-testid="login-button"
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                  style={{ backgroundColor: "#0e1c36", color: "#fff" }}
                  disabled={!validateForm()}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered?{" "}
                <a
                  className="text-dark fw-bold"
                  style={{ textDecoration: "none" }}
                  onClick={handleSignUp}
                >
                  {" "}
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
