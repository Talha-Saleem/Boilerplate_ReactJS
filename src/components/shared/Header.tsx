import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import CreateJob from "../adminPanel/CreateJob";
import Logout from "./Logout";
import { auth } from "../../config/firebase.includes";
import EmailVerification from "./EmailVerification";

function Header(props: any) {
  const [showLoginModel, setShowLoginModel] = useState(false);
  // const [showRegisterModel, setShowRegisterModel] = useState(false);
  const [showCreateJobModel, setShowCreateJobModel] = useState(false);
  const [showLogoutModel, setShowLogoutModel] = useState(false);
  const [showEmailVerificationModel, setShowEmailVerificationModel] =
    useState(false);
  const [
    showEmailVerificationSuccessModel,
    setShowEmailVerificationSuccessModel,
  ] = useState(false);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleEmailVerification = async () => {
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      setShowEmailVerificationModel(false);
      setShowEmailVerificationSuccessModel(true);
    }
  };

  const handleEmailVerificationModel = async () => {
    if (user && user.emailVerified) {
      setShowCreateJobModel(true);
    } else if (user && !user.emailVerified) {
      setShowEmailVerificationModel(true);
    } else {
      setShowLoginModel(true);
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-info navbar-expand-md">
        <div className="container-xxl">
          <a className="navbar-brand">
            <span className="fw-bold text-secondary">Job</span>
            <span className="fw-bold text-primary">Victor</span>
          </a>
          {props.role === "admin" ? (
            <a
              className="btn border text-secondary"
              href=""
              onClick={() => navigate("/adminPanel")}
            >
              Admin Panel
            </a>
          ) : null}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggler"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setShowLogoutModel(true)}
                >
                  Logout
                </a>
              </li>
              {props.role === "admin" || props.role === "premiumUser" ? (
                <>
                  <li className="nav-item d-md-none">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={handleEmailVerificationModel}
                    >
                      Post Job
                    </a>
                  </li>
                  <li className="nav-item d-none d-md-inline">
                    <a
                      className="btn border bi bi-plus-circle text-secondary"
                      href="#"
                      onClick={handleEmailVerificationModel}
                    >
                      Job Post
                    </a>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
      <EmailVerification
        showEmailVerificationModel={showEmailVerificationModel}
        setShowEmailVerificationModel={setShowEmailVerificationModel}
        showEmailVerificationSuccessModel={showEmailVerificationSuccessModel}
        setShowEmailVerificationSuccessModel={
          setShowEmailVerificationSuccessModel
        }
        handleEmailVerification={handleEmailVerification}
      />
      <CreateJob
        showModel={showCreateJobModel}
        setShowModel={setShowCreateJobModel}
        handleCreateJob={props.handleCreateJob}
      />
      <Logout showModel={showLogoutModel} setShowModel={setShowLogoutModel} />
    </>
  );
}

export default Header;
