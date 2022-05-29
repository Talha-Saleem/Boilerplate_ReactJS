import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { signUp } from "../apis/auth/auth.api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const selectElement: any = document.getElementById("userRole");
    const userRole = selectElement?.options[selectElement.selectedIndex].value;
    const status = await signUp(email, pass, userRole);
    if (status === "success") {
      navigate("/");
    } else {
      navigate("/signup");
      alert(status);
    }
  };

  const validateForm = () =>
    email.length && pass.length && confirmPass.length && pass === confirmPass;

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">SignUp</h2>
          <div className="card my-5">
            <form
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
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="confirm password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>
              <div className="d-flex mb-3">
                <label className="form-label mt-1">Select Your Role:</label>
                <div className="d-5 fw-bold ms-3 text-align-center d-center">
                  <select
                    id="userRole"
                    className="form-control "
                    aria-label="Job Sorted"
                    style={{ width: "auto" }}
                  >
                    <option value="user" selected>
                      USER
                    </option>
                    <option value="admin">ADMIN</option>
                    <option value="premiumUser">Premium User</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                  style={{ backgroundColor: "#0e1c36", color: "#fff" }}
                  disabled={!validateForm()}
                  onClick={handleSubmit}
                >
                  SignUp
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Already have an account?{" "}
                <a
                  className="text-dark fw-bold"
                  style={{ textDecoration: "none" }}
                  onClick={handleLogin}
                >
                  {" "}
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
