import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import GovtJobNavbar from "../components/userPanel/GovtJobNavbar";
import { Job } from "../model/jobs/job";
import {
  GET_ALL_JOBS_URL,
  SEARCH_JOB_URL,
} from "../config/constants/url.constants";
import { fetchData, handleSearchJob } from "../apis/jobs/api.jobs";
import { ApiResponse } from "../redux/model/ApiResponse.d";
import AdminFiltersBar from "../components/adminPanel/FiltersBar.admin";
import AdminJobCard from "../components/adminPanel/JobCard.admin";

function AdminPanel() {
  const [jobs, setJobs] = useState<Array<Job>>([]);

  const navigate = useNavigate();

  const { search } = useLocation();
  const PAGE_LIMIT = 2;

  const fetchJobs = async () => {
    const url: string = SEARCH_JOB_URL;
    const query: string = new URLSearchParams(search).toString();

    if (query) {
      const result: ApiResponse = await handleSearchJob(url + query);
      if (result.statusCode !== 200) {
        alert(result.message);
      } else {
        setJobs(result.data ? result.data : []);
      }
    } else {
      const result: ApiResponse = await fetchData(GET_ALL_JOBS_URL);
      if (result.statusCode !== 200) {
        alert(result.message);
      } else {
        setJobs(result.data ? result.data : []);
      }
    }
  };

  const handleUpdateJob = async (job: any) => {
    const index = jobs.findIndex((obj: any) => obj.id === job.id);
    const newJobs = jobs;
    newJobs[index] = job;
    console.log("updating jobs: ", newJobs);
    setJobs([...newJobs]);
  };

  const handleDeleteJob = async (jobId: string) => {
    const index = jobs.findIndex((obj: any) => obj.id === jobId);
    const newJobs = jobs.filter((item, idx) => idx !== index);
    console.log("deleted job: ", newJobs);
    setJobs(newJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Header role="admin" />
      <div className="container-lg mt-5 bg-light">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 bg-light">
            <AdminFiltersBar setJobs={setJobs} />
          </div>

          <div className="col-lg-6 col-md-8 bg-light">
            <div className="d-flex">
              <i className="bi bi-house-fill text-info" />
              <div className="d-5 ms-1 text-info" onClick={() => navigate("/")}>
                Home
              </div>
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
                    <button className="btn btn-outline-info" type="button">
                      {" "}
                      Job Alerts
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {jobs &&
              jobs.map((job: Job) => (
                <AdminJobCard
                  job={job}
                  setJobs={setJobs}
                  handleUpdateJob={handleUpdateJob}
                  handleDeleteJob={handleDeleteJob}
                />
              ))}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn border"
                disabled={jobs.length < 0}
                onClick={async () => {
                  const job: any = jobs[0];
                  const url = `${GET_ALL_JOBS_URL}?endBefore=${job.id}&limit=${PAGE_LIMIT}`;
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
                  if (res.data?.length) {
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
    </>
  );
}

export default AdminPanel;
