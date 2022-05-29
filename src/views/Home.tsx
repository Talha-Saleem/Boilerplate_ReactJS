import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllJobs } from "../redux/actions/GetAllJobsActions";
import { Job } from "../model/jobs/job";
import { searchJob } from "../redux/actions/SearchJobAction";
import { RootSate } from "../redux/reducers/RootReducer";
import {
  GET_ALL_JOBS_URL,
  SEARCH_JOB_URL,
} from "../config/constants/url.constants";
import { ErrorModel } from "../components/shared/ErrorModel";
import { auth } from "../config/firebase.includes";
import { fetchData, getUserJobs } from "../apis/jobs/api.jobs";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import FiltersBar from "../components/userPanel/FiltersBar";
import GovtJobNavbar from "../components/userPanel/GovtJobNavbar";
import JobCard from "../components/userPanel/JobCard";

function Home() {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [showErrorModel, setShowErrorModel] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const dispatch = useDispatch();
  const jobsState = useSelector((state: RootSate) => state.GetAllJobsReducer);

  const PAGE_LIMIT = 2;

  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  const { search } = useLocation();

  const fetchJobs = async () => {
    const url: string = SEARCH_JOB_URL;
    const query: string = new URLSearchParams(search).toString();

    if (query) {
      dispatch(searchJob(url + query));
    } else if (jobsState.data.length === 0) {
      dispatch(getAllJobs());
    }
  };

  useEffect(() => {
    console.log("checking status code: ", jobsState.err.statusCode);
    if (!jobsState.err.statusCode) {
      setShowLoader(true);
      setJobs(jobsState.data);
      // when data is received, hide loader
      setShowLoader(false);
    } else {
      setShowErrorModel(true);
    }
  }, [jobsState]);

  // check user is already logged in or not
  onAuthStateChanged(auth, async (user) => {
    // debugger
    console.log("state changed");
    if (!user) {
      navigate("/login");
    } else if (user) {
      // enforcing token refresh
      // await user.getIdToken(true);
      const result = await user.getIdTokenResult();
      console.log("my user: ", result.claims.role);
      if (result.claims.role && typeof result.claims.role === "string") {
        setUserRole(result.claims.role);
      }
    }
  });

  const handleJobFilter = async () => {
    const selectBox: any = document.getElementById("job-filter");
    const selectedValue = selectBox?.options[selectBox.selectedIndex].value;
    console.log("changed value: ", selectedValue);
    if (selectedValue === "All Jobs") {
      dispatch(getAllJobs());
    } else if (typeof auth.currentUser?.uid === "string") {
      const data = await getUserJobs(auth.currentUser.uid);
      setJobs(data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Header role={userRole} />
      <div className="container-lg mt-5 bg-light">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 bg-light">
            <FiltersBar />
          </div>

          <div className="col-lg-6 col-md-8 bg-light">
            <div className="d-flex">
              <i className="bi bi-house-fill text-info" />
              <div className="d-5 ms-1 text-info">Home</div>
            </div>
            <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <p className="card-text">
                  you looking for jobs in Pakistan? jobVictor has all of the
                  latest jobs in Pakistan for you. The perfect job in your own
                  city is just a few clicks away. Whether you are looking for a
                  part time job or a full time job, scroll down to find your
                  dream job in Pakistan now.
                </p>
              </div>
            </div>

            <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
              <div className="card-body justify-content-between d-flex">
                <div className="d-5 fw-bold">Latest Jobs</div>
                <select
                  className="form-control "
                  aria-label="Job Sorted"
                  style={{ width: "auto" }}
                >
                  <option selected>Descending</option>
                  <option>Ascending</option>
                </select>
              </div>
            </div>

            <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <div className="row justify-content-between">
                  <div className="col-8 p-2">
                    <div className="d-5 fw-bold">Job Alerts</div>
                    <div className="d3">
                      Receive emails for the latest jobs matching your search
                      criteria
                    </div>
                  </div>
                  <div className="col-4 p-4">
                    <button type="button" className="btn btn-outline-info">
                      {" "}
                      Job Alerts
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {userRole === "premiumUser" ? (
              <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
                <div className="card-body justify-content-between d-flex">
                  <div className="d-5 fw-bold">Jobs Filter</div>
                  <select
                    id="job-filter"
                    className="form-control"
                    aria-label="Job Sorted"
                    style={{ width: "auto" }}
                    onChange={() => handleJobFilter()}
                  >
                    <option value="All Jobs" selected>
                      All Jobs
                    </option>
                    <option value="My Jobs">My Jobs</option>
                  </select>
                </div>
              </div>
            ) : null}

            {/*
             * show loader until data loads  */}

            {showLoader ? (
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            ) : null}

            {jobs &&
              jobs.map((job: Job) => <JobCard job={job} role={userRole} />)}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn border"
                disabled={jobs.length < 0}
                onClick={async () => {
                  const job: any = jobs[0];
                  const url = `${GET_ALL_JOBS_URL}?endBefore=${job.id}&limit=${PAGE_LIMIT}`;
                  console.log("url: ", url);
                  const res: any = await fetchData(url);
                  if (res.data?.length) {
                    setJobs(res.data);
                  }
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn border"
                disabled={jobs.length < 2}
                onClick={async () => {
                  const job: any = jobs[1];
                  const url = `${GET_ALL_JOBS_URL}?startAfter=${job.id}&limit=${PAGE_LIMIT}`;
                  const res: any = await fetchData(url);
                  if (res.data.length) {
                    setJobs(res.data);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <GovtJobNavbar />
          </div>
        </div>
      </div>
      <Footer />
      <ErrorModel
        showModel={showErrorModel}
        handleShowModel={setShowErrorModel}
      />
    </>
  );
}

export default Home;
