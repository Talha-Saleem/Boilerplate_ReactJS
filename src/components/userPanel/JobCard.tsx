import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import logo from "/home/taimoor/PROJECT/job-poster/src/assets/images/bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobAction } from "../../redux/actions/DeleteJobAction";
import { auth } from "../../config/firebase.includes";
import { RootSate } from "../../redux/reducers/RootReducer";
import EditJobModel from "./EditJob";

function JobCard(props: any) {
  // const [showModel, setShowModel] = useState(false);
  // const [postName, setPostName] = useState(props.job["postName"]);
  // const [country, setCountry] = useState(props.job["country"]);
  // const [company, setCompany] = useState(props.job["company"]);
  // const [description, setDescription] = useState(props.job["description"]);
  // const [postedBy, setPostedBy] = useState(props.job["postedBy"]);
  // const [vacancies, setVacancies] = useState(props.job["vacancies"]);
  // const [jobType, setJobType] = useState(props.job["jobType"]);
  // const [qualification, setQualification] = useState(
  //   props.job["qualification"]
  // );
  // const [salary, setSalary] = useState(props.job["salary"]);
  // const [salaryType, setSalaryType] = useState(props.job["salaryType"]);
  // const [experience, setExperience] = useState(props.job["experience"]);
  // const [jobLevel, setJobLevel] = useState(props.job["jobLevel"]);
  // const [shift, setShift] = useState(props.job["shift"]);
  // const [skills, setSkills] = useState(props.job["skills"]);
  // const [jobClass, setJobClass] = useState(props.job["jobClass"]);
  // // const [userRole, setUserRole] = useState("");
  const jobsState = useSelector((state: RootSate) => state.GetAllJobsReducer);

  const dispatch = useDispatch();

  // const handleShowModel = () => {
  //   setShowModel(true);
  // };

  // const handleCloseModel = () => {
  //   setShowModel(false);
  // };

  // const handleUpdate = () => {
  //   const job = {
  //     postName,
  //     country,
  //     company,
  //     description,
  //     postedBy,
  //     id: props.job["id"],
  //     vacancies,
  //     jobType,
  //     jobLevel,
  //     jobClass,
  //     qualification,
  //     skills,
  //     salary,
  //     salaryType,
  //     experience,
  //     shift,
  //   };
  //   dispatch(updateJobAction(job,jobsState.data));

  //   handleCloseModel();
  // };

  // onAuthStateChanged(auth,(user) => {
  //   if(user){
  //     user.getIdTokenResult()

  //   }
  // })
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     user.getIdTokenResult().then((result) => {
  //       if (result.claims.role && typeof result.claims.role === "string") {
  //         setUserRole(result.claims.role);
  //       }
  //     });
  //   }
  // });
  // const getUserClaims = async () => {
  //   await auth.currentUser?.getIdToken(true);
  //   auth.currentUser?.getIdTokenResult().then((result)=>{
  //     console.log('role is: ',result.claims.role)
  //     if(result.claims.role && typeof result.claims.role === 'string'){
  //     setUserRole(result.claims.role);
  //     }
  //   })
  // }

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        {/* <div className="col-md-4 justify-content-center">
            <img src={logo} className="img-fluid rounded-start" alt="abc" />
          </div> */}
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
          {props.role === "premiumUser" &&
          auth.currentUser?.uid === props.job.userID ? (
            <div className="card-footer d-flex justify-content-end">
              <EditJobModel job={props.job} />
              <i
                className="bi bi-trash-fill ps-2 text-outline-info"
                title="Delete"
                onClick={() => {
                  dispatch(deleteJobAction(props.job.id, jobsState.data));
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
