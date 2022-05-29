import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useDispatch, useSelector } from "react-redux";
import { updateJobAction } from "../../redux/actions/UpdateJob";
import { RootSate } from "../../redux/reducers/RootReducer";
import {
  ACCOUNTING,
  ADMINISTRATIVE,
  ADOBE_ILLUSTRATOR,
  ADOBE_PHOTOSHOP,
  ADOBE_PRIME_CC_ETC,
  AI,
  AJAX,
  ANALYSIS,
  ANALYTICAL_SKILLS,
  ANDROID,
  ANGULAR_JS,
  ANIMATION,
  ANSYS,
  APACHE,
  APPLICATION_DEVELOPMENT,
  ARCHITECTURE,
  ARTS,
  ASP_DOT_NET,
  BACHELOR,
  BLOCKCHAIN,
  COMPATIBLE,
  CONTRACT,
  EIGHT_THOUSAND_TO_ONE_LAC,
  EIGHT_YEAR,
  EVENING,
  EXECUTIVE,
  FEATURE,
  FIFTY_THOUSAND_TO_SIXTY_THOUSAND,
  FIVE_YEAR,
  FORTY_THOUSAND_TO_FIFTY_THOUSAND,
  FOUR_YEAR,
  FRESH,
  FULL_TIME,
  HOUR,
  INTERMEDIATE,
  INTERNSHIP,
  JUNIOR,
  LESS_THAN_TEN_THOUSAND,
  MANAGER,
  MASTER,
  MATRICULATION,
  MONTH,
  MORNING,
  NEGOTIABLE,
  NIGHT,
  NINE_YEAR,
  OFFICER,
  ONE_YEAR,
  PART_TIME,
  PHD,
  ROUND,
  SENIOR,
  SEVEN_YEAR,
  SIXTY_THOUSAND_TO_EIGHT_THOUSAND,
  SIX_YEAR,
  STUDENT,
  TEMPORARY,
  TEN_THOUSAND_TO_TWENTY_THOUSAND,
  TEN_YEARS_PLUS,
  THIRTY_THOUSAND_TO_FORTY_THOUSAND,
  THREE_YEAR,
  TWENTY_THOUSAND_TO_THIRTY_THOUSAND,
  TWO_YEAR,
  WEEK,
} from "../../config/constants/filters.constant";

function EditJobModel(props: any) {
  const [showModel, setShowModel] = useState(false);
  const [postName, setPostName] = useState(props.job.postName);
  const [country, setCountry] = useState(props.job.country);
  const [company, setCompany] = useState(props.job.company);
  const [description, setDescription] = useState(props.job.description);
  const [postedBy, setPostedBy] = useState(props.job.postedBy);
  const [vacancies, setVacancies] = useState(props.job.vacancies);
  const [jobType, setJobType] = useState(props.job.jobType);
  const [qualification, setQualification] = useState(props.job.qualification);
  const [salary, setSalary] = useState(props.job.salary);
  const [salaryType, setSalaryType] = useState(props.job.salaryType);
  const [experience, setExperience] = useState(props.job.experience);
  const [jobLevel, setJobLevel] = useState(props.job.jobLevel);
  const [shift, setShift] = useState(props.job.shift);
  const [skills, setSkills] = useState(props.job.skills);
  const [jobClass, setJobClass] = useState(props.job.jobClass);

  const jobsState = useSelector((state: RootSate) => state.GetAllJobsReducer);
  const dispatch = useDispatch();

  const handleShowModel = () => {
    setShowModel(true);
  };

  const handleCloseModel = () => {
    setShowModel(false);
  };

  const handleUpdateJob = async () => {
    const job = {
      postName,
      country,
      company,
      description,
      postedBy,
      id: props.job.id,
      vacancies,
      jobType,
      jobLevel,
      jobClass,
      qualification,
      skills,
      salary,
      salaryType,
      experience,
      shift,
    };
    dispatch(updateJobAction(job, jobsState.data));
    handleCloseModel();
  };

  return (
    <>
      <i
        className="bi bi-pencil-fill text-outline-info"
        title="Edit"
        onClick={handleShowModel}
      />
      <Modal
        show={showModel}
        onHide={handleCloseModel}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <label>Post Name</label>
          <input
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
          />
          <label>Company Name</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />
          <label>Country</label>
          <input value={country} onChange={(e) => setCountry(e.target.value)} />
          <label>Posted by</label>
          <input
            value={postedBy}
            onChange={(e) => setPostedBy(e.target.value)}
          />

          <div className="d-flex justify-content-between mt-3">
            <div className="input-group d-flex flex-column">
              <label>Job Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobType"
                  checked={jobType == FULL_TIME}
                  value={FULL_TIME}
                  onClick={() => {
                    setJobType(FULL_TIME);
                  }}
                />
                <label className="form-check-label">{FULL_TIME}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={jobType == PART_TIME}
                  name="jobType"
                  value={PART_TIME}
                  onClick={() => {
                    setJobType(PART_TIME);
                  }}
                />
                <label className="form-check-label">{PART_TIME}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobType"
                  checked={jobType == CONTRACT}
                  value={CONTRACT}
                  onClick={() => {
                    setJobType(CONTRACT);
                  }}
                />
                <label className="form-check-label">{CONTRACT}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobType"
                  checked={jobType == INTERNSHIP}
                  value={INTERNSHIP}
                  onClick={() => {
                    setJobType(INTERNSHIP);
                  }}
                />
                <label className="form-check-label">{INTERNSHIP}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobType"
                  checked={jobType == TEMPORARY}
                  value={TEMPORARY}
                  onClick={() => {
                    setJobType(TEMPORARY);
                  }}
                />
                <label className="form-check-label">{TEMPORARY}</label>
              </div>
            </div>

            <div className="input-group d-flex flex-column">
              <label>Qualification</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={qualification == MATRICULATION}
                  name="qualification"
                  value={MATRICULATION}
                  onClick={() => {
                    setQualification(MATRICULATION);
                  }}
                />
                <label className="form-check-label">{MATRICULATION}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="qualification"
                  checked={qualification == INTERMEDIATE}
                  value={INTERMEDIATE}
                  onClick={() => {
                    setQualification(INTERMEDIATE);
                  }}
                />
                <label className="form-check-label">{INTERMEDIATE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="qualification"
                  checked={qualification == BACHELOR}
                  value={BACHELOR}
                  onClick={() => {
                    setQualification(BACHELOR);
                  }}
                />
                <label className="form-check-label">{BACHELOR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="qualification"
                  checked={qualification == MASTER}
                  value={MASTER}
                  onClick={() => {
                    setQualification(MASTER);
                  }}
                />
                <label className="form-check-label">{MASTER}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={qualification == PHD}
                  name="qualification"
                  value={PHD}
                  onClick={() => {
                    setQualification(PHD);
                  }}
                />
                <label className="form-check-label">{PHD}</label>
              </div>
            </div>
          </div>
          <hr className="bg-info border-2 border-top border-info" />
          <div className="d-flex justify-content-between">
            <div className="input-group  d-flex flex-column">
              <label>Job Level</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={jobLevel === SENIOR}
                  name="jobLevel"
                  value={SENIOR}
                  onClick={() => {
                    setJobLevel(SENIOR);
                  }}
                />
                <label className="form-check-label">{SENIOR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobLevel"
                  checked={jobLevel === JUNIOR}
                  value={JUNIOR}
                  onClick={() => {
                    setJobLevel(JUNIOR);
                  }}
                />
                <label className="form-check-label">{JUNIOR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jobLevel"
                  checked={jobLevel === STUDENT}
                  value={STUDENT}
                  onClick={() => {
                    setJobLevel(STUDENT);
                  }}
                />
                <label className="form-check-label">{STUDENT}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={jobLevel === OFFICER}
                  name="jobLevel"
                  value={OFFICER}
                  onClick={() => {
                    setJobLevel(OFFICER);
                  }}
                />
                <label className="form-check-label">{OFFICER}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={jobLevel === EXECUTIVE}
                  name="jobLevel"
                  value={EXECUTIVE}
                  onClick={() => {
                    setJobLevel(EXECUTIVE);
                  }}
                />
                <label className="form-check-label">{EXECUTIVE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={jobLevel === MANAGER}
                  name="jobLevel"
                  value={MANAGER}
                  onClick={() => {
                    setJobLevel(MANAGER);
                  }}
                />
                <label className="form-check-label">{MANAGER}</label>
              </div>
            </div>

            <div className="input-group  d-flex flex-column">
              <label>Salary</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={salary === LESS_THAN_TEN_THOUSAND}
                  name="salary"
                  value={LESS_THAN_TEN_THOUSAND}
                  onClick={() => {
                    setSalary(LESS_THAN_TEN_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {LESS_THAN_TEN_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === TEN_THOUSAND_TO_TWENTY_THOUSAND}
                  value={TEN_THOUSAND_TO_TWENTY_THOUSAND}
                  onClick={() => {
                    setSalary(TEN_THOUSAND_TO_TWENTY_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {TEN_THOUSAND_TO_TWENTY_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                  value={TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                  onClick={() => {
                    setSalary(TWENTY_THOUSAND_TO_THIRTY_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                  value={THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                  onClick={() => {
                    setSalary(THIRTY_THOUSAND_TO_FORTY_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                  value={FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                  onClick={() => {
                    setSalary(FORTY_THOUSAND_TO_FIFTY_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                  value={FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                  onClick={() => {
                    setSalary(FIFTY_THOUSAND_TO_SIXTY_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                  value={SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                  onClick={() => {
                    setSalary(SIXTY_THOUSAND_TO_EIGHT_THOUSAND);
                  }}
                />
                <label className="form-check-label">
                  {SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === EIGHT_THOUSAND_TO_ONE_LAC}
                  value={EIGHT_THOUSAND_TO_ONE_LAC}
                  onClick={() => {
                    setSalary(EIGHT_THOUSAND_TO_ONE_LAC);
                  }}
                />
                <label className="form-check-label">
                  {EIGHT_THOUSAND_TO_ONE_LAC}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === COMPATIBLE}
                  value={COMPATIBLE}
                  onClick={() => {
                    setSalary(COMPATIBLE);
                  }}
                />
                <label className="form-check-label">{COMPATIBLE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salary"
                  checked={salary === NEGOTIABLE}
                  value={NEGOTIABLE}
                  onClick={() => {
                    setSalary(NEGOTIABLE);
                  }}
                />
                <label className="form-check-label">{NEGOTIABLE}</label>
              </div>
            </div>
          </div>
          <hr className="bg-info border-2 border-top border-info" />
          <div className="d-flex justify-content-between">
            <div className="input-group d-flex flex-column">
              <label>Salary Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salaryType"
                  checked={salaryType === MONTH}
                  value={MONTH}
                  onClick={() => {
                    setSalaryType(MONTH);
                  }}
                />
                <label className="form-check-label">{MONTH}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salaryType"
                  checked={salaryType === WEEK}
                  value={WEEK}
                  onClick={() => {
                    setSalaryType(WEEK);
                  }}
                />
                <label className="form-check-label">{WEEK}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="salaryType"
                  value={HOUR}
                  checked={salaryType === HOUR}
                  onClick={() => {
                    setSalaryType(HOUR);
                  }}
                />
                <label className="form-check-label">{HOUR}</label>
              </div>
            </div>

            <div className="input-group d-flex flex-column">
              <label>Experience</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === FRESH}
                  value={FRESH}
                  onClick={() => {
                    setExperience(FRESH);
                  }}
                />
                <label className="form-check-label">{FRESH}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  value={ONE_YEAR}
                  checked={experience === ONE_YEAR}
                  onClick={() => {
                    setExperience(ONE_YEAR);
                  }}
                />
                <label className="form-check-label">{ONE_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  value={TWO_YEAR}
                  checked={experience === TWO_YEAR}
                  onClick={() => {
                    setExperience(TWO_YEAR);
                  }}
                />
                <label className="form-check-label">{TWO_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === THREE_YEAR}
                  value={THREE_YEAR}
                  onClick={() => {
                    setExperience(THREE_YEAR);
                  }}
                />
                <label className="form-check-label">{THREE_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === FOUR_YEAR}
                  value={FOUR_YEAR}
                  onClick={() => {
                    setExperience(FOUR_YEAR);
                  }}
                />
                <label className="form-check-label">{FOUR_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === FIVE_YEAR}
                  value={FIVE_YEAR}
                  onClick={() => {
                    setExperience(FIVE_YEAR);
                  }}
                />
                <label className="form-check-label">{FIVE_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  value={SIX_YEAR}
                  checked={experience === SIX_YEAR}
                  onClick={() => {
                    setExperience(SIX_YEAR);
                  }}
                />
                <label className="form-check-label">{SIX_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  value={SEVEN_YEAR}
                  checked={experience === SEVEN_YEAR}
                  onClick={() => {
                    setExperience(SEVEN_YEAR);
                  }}
                />
                <label className="form-check-label">{SEVEN_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === EIGHT_YEAR}
                  value={EIGHT_YEAR}
                  onClick={() => {
                    setExperience(EIGHT_YEAR);
                  }}
                />
                <label className="form-check-label">{EIGHT_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  value={NINE_YEAR}
                  checked={experience === NINE_YEAR}
                  onClick={() => {
                    setExperience(NINE_YEAR);
                  }}
                />
                <label className="form-check-label">{NINE_YEAR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="experience"
                  checked={experience === TEN_YEARS_PLUS}
                  value={TEN_YEARS_PLUS}
                  onClick={() => {
                    setExperience(TEN_YEARS_PLUS);
                  }}
                />
                <label className="form-check-label">{TEN_YEARS_PLUS}</label>
              </div>
            </div>
          </div>
          <hr className="bg-info border-2 border-top border-info" />
          <div className="d-flex justify-content-between">
            <div className="input-group accordion-body d-flex flex-column">
              <label>Shift</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shift"
                  checked={shift === MORNING}
                  value={MORNING}
                  onClick={() => {
                    setShift(MORNING);
                  }}
                />
                <label className="form-check-label">{MORNING}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shift"
                  checked={shift === EVENING}
                  value={EVENING}
                  onClick={() => {
                    setShift(EVENING);
                  }}
                />
                <label className="form-check-label">{EVENING}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shift"
                  checked={shift === NIGHT}
                  value={NIGHT}
                  onClick={() => {
                    setShift(NIGHT);
                  }}
                />
                <label className="form-check-label">{NIGHT}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shift"
                  checked={shift === ROUND}
                  value={ROUND}
                  onClick={() => {
                    setShift(ROUND);
                  }}
                />
                <label className="form-check-label">{ROUND}</label>
              </div>
            </div>

            <div className="input-group accordion-body d-flex flex-column">
              <label>Required Skills</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ACCOUNTING}
                  value={ACCOUNTING}
                  onClick={() => {
                    setSkills(ACCOUNTING);
                  }}
                />
                <label className="form-check-label">{ACCOUNTING}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ADMINISTRATIVE}
                  value={ADMINISTRATIVE}
                  onClick={() => {
                    setSkills(ADMINISTRATIVE);
                  }}
                />
                <label className="form-check-label">{ADMINISTRATIVE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ADOBE_ILLUSTRATOR}
                  value={ADOBE_ILLUSTRATOR}
                  onClick={() => {
                    setSkills(ADOBE_ILLUSTRATOR);
                  }}
                />
                <label className="form-check-label">{ADOBE_ILLUSTRATOR}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ADOBE_PHOTOSHOP}
                  value={ADOBE_PHOTOSHOP}
                  onClick={() => {
                    setSkills(ADOBE_PHOTOSHOP);
                  }}
                />
                <label className="form-check-label">{ADOBE_PHOTOSHOP}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ADOBE_PRIME_CC_ETC}
                  value={ADOBE_PRIME_CC_ETC}
                  onClick={() => {
                    setSkills(ADOBE_PRIME_CC_ETC);
                  }}
                />
                <label className="form-check-label">{ADOBE_PRIME_CC_ETC}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === AI}
                  value={AI}
                  onClick={() => {
                    setSkills(AI);
                  }}
                />
                <label className="form-check-label">{AI}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === AJAX}
                  value={AJAX}
                  onClick={() => {
                    setSkills(AJAX);
                  }}
                />
                <label className="form-check-label">{AJAX}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANALYSIS}
                  value={ANALYSIS}
                  onClick={() => {
                    setSkills(ANALYSIS);
                  }}
                />
                <label className="form-check-label">{ANALYSIS}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANALYTICAL_SKILLS}
                  value={ANALYTICAL_SKILLS}
                  onClick={() => {
                    setSkills(ANALYTICAL_SKILLS);
                  }}
                />
                <label className="form-check-label">{ANALYTICAL_SKILLS}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANDROID}
                  value={ANDROID}
                  onClick={() => {
                    setSkills(ANDROID);
                  }}
                />
                <label className="form-check-label">{ANDROID}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANGULAR_JS}
                  value={ANGULAR_JS}
                  onClick={() => {
                    setSkills(ANGULAR_JS);
                  }}
                />
                <label className="form-check-label">{ANGULAR_JS}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANIMATION}
                  value={ANIMATION}
                  onClick={() => {
                    setSkills(ANIMATION);
                  }}
                />
                <label className="form-check-label">{ANIMATION}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ANSYS}
                  value={ANSYS}
                  onClick={() => {
                    setSkills(ANSYS);
                  }}
                />
                <label className="form-check-label">{ANSYS}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === APACHE}
                  value={APACHE}
                  onClick={() => {
                    setSkills(APACHE);
                  }}
                />
                <label className="form-check-label">{APACHE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === APPLICATION_DEVELOPMENT}
                  value={APPLICATION_DEVELOPMENT}
                  onClick={() => {
                    setSkills(APPLICATION_DEVELOPMENT);
                  }}
                />
                <label className="form-check-label">
                  {APPLICATION_DEVELOPMENT}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ARCHITECTURE}
                  value={ARCHITECTURE}
                  onClick={() => {
                    setSkills(ARCHITECTURE);
                  }}
                />
                <label className="form-check-label">{ARCHITECTURE}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ARTS}
                  value={ARTS}
                  onClick={() => {
                    setSkills(ARTS);
                  }}
                />
                <label className="form-check-label">{ARTS}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === ASP_DOT_NET}
                  value={ASP_DOT_NET}
                  onClick={() => {
                    setSkills(ASP_DOT_NET);
                  }}
                />
                <label className="form-check-label">{ASP_DOT_NET}</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skills"
                  checked={skills === BLOCKCHAIN}
                  value={BLOCKCHAIN}
                  onClick={() => {
                    setSkills(BLOCKCHAIN);
                  }}
                />
                <label className="form-check-label">{BLOCKCHAIN}</label>
              </div>
            </div>
          </div>
          <hr className="bg-info border-2 border-top border-info" />

          <div className="input-group accordion-body d-flex flex-column">
            <label>Job Class</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="jobClass"
                value={FEATURE}
                checked={jobClass === FEATURE}
                onClick={() => {
                  setJobClass(FEATURE);
                }}
              />
              <label className="form-check-label">{FEATURE}</label>
            </div>
          </div>

          <label>Vacancies</label>
          <input
            value={vacancies}
            onChange={(e) => setVacancies(e.target.value)}
          />
          <div className="mt-3 form-floating">
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ height: "140px" }}
              placeholder="Description"
            />
            <label>Description</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdateJob}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditJobModel;
