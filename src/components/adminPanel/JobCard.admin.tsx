import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/images/bg.jpg";
import { handleDelete } from "../../apis/jobs/api.jobs";
import EditJobModel from "./EditJob.admin";

function AdminJobCard(props: any) {
  const handleDeleteJob = async (jobId: string) => {
    await handleDelete(jobId);
    props.handleDeleteJob(jobId);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 justify-content-center">
          <img src={logo} className="img-fluid rounded-start" alt="abc" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.job.postName}</h5>
            <div className="d-5">IT &amp; Computer</div>
            <div className="d-flex">
              <i className="bi bi-geo-alt-fill text-info" />
              <div className="d-5 ps-2">{props.job.country}</div>
              <a
                href="#"
                className="btn rounded-pill border ms-5 btn-outline-info"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <EditJobModel
              job={props.job}
              handleUpdateJob={props.handleUpdateJob}
            />
            <i
              className="bi bi-trash-fill ps-2 text-outline-info"
              title="Delete"
              onClick={() => {
                handleDeleteJob(props.job.id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminJobCard;
