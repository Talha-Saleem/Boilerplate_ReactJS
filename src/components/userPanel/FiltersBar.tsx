import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SEARCH_JOB_URL } from "../../config/constants/url.constants";
import { getAllJobs } from "../../redux/actions/GetAllJobsActions";
import { searchJob } from "../../redux/actions/SearchJobAction";
import {
  filterJobByCountry,
  filterJobByExperience,
  filterJobByJobClass,
  filterJobByJobLevel,
  filterJobByJobType,
  filterJobByPostName,
  filterJobByQualification,
  filterJobBySalary,
  filterJobBySalaryType,
  filterJobByShift,
  filterJobBySkill,
} from "../../redux/actions/FiltersAction";
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
  CANADA,
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
  GERMANY,
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
  SWEDEN,
  TEMPORARY,
  TEN_THOUSAND_TO_TWENTY_THOUSAND,
  TEN_YEARS_PLUS,
  THIRTY_THOUSAND_TO_FORTY_THOUSAND,
  THREE_YEAR,
  TWENTY_THOUSAND_TO_THIRTY_THOUSAND,
  TWO_YEAR,
  UK,
  US,
  WEEK,
  YEAR,
} from "../../config/constants/filters.constant";

function FiltersBar() {
  const dispatch = useDispatch();
  const filtersState = useSelector((state: any) => state.FiltersReducer);
  const [postName, setPostName] = useState<string>(filtersState.postName);

  const navigate = useNavigate();

  const handleFilter = () => {
    const url: string = SEARCH_JOB_URL;
    let query = "";
    if (filtersState.postName != "" && filtersState.postName) {
      query += `postName=${filtersState.postName}`;
    }
    if (filtersState.country != "" && filtersState.country) {
      if (query != "") {
        query += `&country=${filtersState.country}`;
      } else {
        query += `country=${filtersState.country}`;
      }
    }
    if (filtersState.qualification != "" && filtersState.qualification) {
      if (query != "") {
        query += `&qualification=${filtersState.qualification}`;
      } else {
        query += `qualification=${filtersState.qualification}`;
      }
    }
    if (filtersState.salaryType != "" && filtersState.salaryType) {
      if (query != "") {
        query += `&salaryType=${filtersState.salaryType}`;
      } else {
        query += `salaryType=${filtersState.salaryType}`;
      }
    }
    if (filtersState.salary != "" && filtersState.salary) {
      if (query != "") {
        query += `&salary=${filtersState.salary}`;
      } else {
        query += `salary=${filtersState.salary}`;
      }
    }
    if (filtersState.shift != "" && filtersState.shift) {
      if (query != "") {
        query += `&shift=${filtersState.shift}`;
      } else {
        query += `shift=${filtersState.shift}`;
      }
    }
    if (filtersState.jobLevel != "" && filtersState.jobLevel) {
      if (query != "") {
        query += `&jobLevel=${filtersState.jobLevel}`;
      } else {
        query += `jobLevel=${filtersState.jobLevel}`;
      }
    }
    if (filtersState.experience != "" && filtersState.experience) {
      if (query != "") {
        query += `&experience=${filtersState.experience}`;
      } else {
        query += `experience=${filtersState.experience}`;
      }
    }
    if (filtersState.jobType != "" && filtersState.jobType) {
      if (query != "") {
        query += `&jobType=${filtersState.jobType}`;
      } else {
        query += `jobType=${filtersState.jobType}`;
      }
    }
    if (filtersState.skills != "" && filtersState.skills) {
      if (query != "") {
        query += `&skill=${filtersState.skills}`;
      } else {
        query += `skill=${filtersState.skills}`;
      }
    }
    if (filtersState.jobClass != "" && filtersState.jobClass) {
      if (query != "") {
        query += `&jobClass=${filtersState.jobClass}`;
      } else {
        query += `jobClass=${filtersState.jobClass}`;
      }
    }
    if (query != "") {
      navigate(`/?${query}`);
      dispatch(searchJob(url + query));
    } else {
      navigate("");
      dispatch(getAllJobs());
    }
  };
  useEffect(() => {
    handleFilter();
  }, [
    filtersState.postName,
    filtersState.country,
    filtersState.jobType,
    filtersState.salary,
    filtersState.salaryType,
    filtersState.qualification,
    filtersState.jobClass,
    filtersState.shift,
    filtersState.skills,
    filtersState.experience,
    filtersState.jobLevel,
  ]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(filterJobByPostName(postName));
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [postName]);

  return (
    <>
      <div className="list-group-item">
        <span className="d-5">Search Filters</span>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item  text-center">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#search"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Search Job
                </button>
              </h2>
              <div
                id="search"
                className="accordion-collapse collapse"
                aria-labelledby="searchHeading"
                data-bs-parent="#searchAccordion"
              >
                <div className="input-group accordion-body justify-content-start">
                  <span className="input-group-text">
                    <i className="bi bi-search text-secondary" />
                  </span>
                  <input
                    value={postName}
                    onChange={(e) => {
                      setPostName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter keyword or title"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item text-start">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#location"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Locations
                </button>
              </h2>
              <div
                id="location"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item"
                      onClick={() => dispatch(filterJobByCountry(SWEDEN))}
                    >
                      {SWEDEN}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => dispatch(filterJobByCountry(US))}
                    >
                      {US}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => dispatch(filterJobByCountry(UK))}
                    >
                      {UK}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => dispatch(filterJobByCountry(GERMANY))}
                    >
                      {GERMANY}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => dispatch(filterJobByCountry(CANADA))}
                    >
                      {CANADA}
                    </li>
                    <li
                      className="list-group-item text-end text-info"
                      onClick={() => {
                        if (filtersState.country !== "") {
                          dispatch(filterJobByCountry(""));
                        }
                      }}
                    >
                      Clear Filter
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#jobtype"
                  aria-expanded="true"
                  aria-controls="collapseJobType"
                >
                  Job Type
                </button>
              </h2>
              <div
                id="jobtype"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={filtersState.jobType == FULL_TIME}
                      value={FULL_TIME}
                      onClick={() => {
                        if (filtersState.jobType === FULL_TIME) {
                          dispatch(filterJobByJobType(""));
                        } else {
                          dispatch(filterJobByJobType(FULL_TIME));
                        }
                      }}
                    />
                    <label className="form-check-label">{FULL_TIME}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.jobType == PART_TIME}
                      name="jobType"
                      value={PART_TIME}
                      onClick={() => {
                        if (filtersState.jobType === PART_TIME) {
                          dispatch(filterJobByJobType(""));
                        } else {
                          dispatch(filterJobByJobType(PART_TIME));
                        }
                      }}
                    />
                    <label className="form-check-label">{PART_TIME}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={filtersState.jobType == CONTRACT}
                      value={CONTRACT}
                      onClick={() => {
                        if (filtersState.jobType === CONTRACT) {
                          dispatch(filterJobByJobType(""));
                        } else {
                          dispatch(filterJobByJobType(CONTRACT));
                        }
                      }}
                    />
                    <label className="form-check-label">{CONTRACT}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={filtersState.jobType == INTERNSHIP}
                      value={INTERNSHIP}
                      onClick={() => {
                        if (filtersState.jobType === INTERNSHIP) {
                          dispatch(filterJobByJobType(""));
                        } else {
                          dispatch(filterJobByJobType(INTERNSHIP));
                        }
                      }}
                    />
                    <label className="form-check-label">{INTERNSHIP}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={filtersState.jobType == TEMPORARY}
                      value={TEMPORARY}
                      onClick={() => {
                        if (filtersState.jobType === TEMPORARY) {
                          dispatch(filterJobByJobType(""));
                        } else {
                          dispatch(filterJobByJobType(TEMPORARY));
                        }
                      }}
                    />
                    <label className="form-check-label">{TEMPORARY}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#qualification"
                  aria-expanded="true"
                  aria-controls="collapseJobType"
                >
                  Job Qualification
                </button>
              </h2>
              <div
                id="qualification"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.qualification == "Matriculation"}
                      name="qualification"
                      value={MATRICULATION}
                      onClick={() => {
                        if (filtersState.qualification == MATRICULATION) {
                          dispatch(filterJobByQualification(""));
                        } else {
                          dispatch(filterJobByQualification(MATRICULATION));
                        }
                      }}
                    />
                    <label className="form-check-label">{MATRICULATION}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={filtersState.qualification == INTERMEDIATE}
                      value={INTERMEDIATE}
                      onClick={() => {
                        if (filtersState.qualification == INTERMEDIATE) {
                          dispatch(filterJobByQualification(""));
                        } else {
                          dispatch(filterJobByQualification(INTERMEDIATE));
                        }
                      }}
                    />
                    <label className="form-check-label">{INTERMEDIATE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={filtersState.qualification == BACHELOR}
                      value={BACHELOR}
                      onClick={() => {
                        if (filtersState.qualification == BACHELOR) {
                          dispatch(filterJobByQualification(""));
                        } else {
                          dispatch(filterJobByQualification(BACHELOR));
                        }
                      }}
                    />
                    <label className="form-check-label">{BACHELOR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={filtersState.qualification == MASTER}
                      value={MASTER}
                      onClick={() => {
                        if (filtersState.qualification == MASTER) {
                          dispatch(filterJobByQualification(""));
                        } else {
                          dispatch(filterJobByQualification(MASTER));
                        }
                      }}
                    />
                    <label className="form-check-label">{MASTER}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.qualification == PHD}
                      name="qualification"
                      value={PHD}
                      onClick={() => {
                        if (filtersState.qualification == PHD) {
                          dispatch(filterJobByQualification(""));
                        } else {
                          dispatch(filterJobByQualification(PHD));
                        }
                      }}
                    />
                    <label className="form-check-label">{PHD}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#jobLevel"
                  aria-expanded="true"
                  aria-controls="collapseJobLevel"
                >
                  Job Level
                </button>
              </h2>
              <div
                id="jobLevel"
                className="accordion-collapse collapse"
                aria-labelledby="jobLevel"
                data-bs-parent="#jobLevel"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.jobLevel === SENIOR}
                      name="jobLevel"
                      value={SENIOR}
                      onClick={() => {
                        if (filtersState.jobLevel === SENIOR) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(SENIOR));
                        }
                      }}
                    />
                    <label className="form-check-label">{SENIOR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobLevel"
                      checked={filtersState.jobLevel === JUNIOR}
                      value={JUNIOR}
                      onClick={() => {
                        if (filtersState.jobLevel === JUNIOR) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(JUNIOR));
                        }
                      }}
                    />
                    <label className="form-check-label">{JUNIOR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobLevel"
                      checked={filtersState.jobLevel === STUDENT}
                      value={STUDENT}
                      onClick={() => {
                        if (filtersState.jobLevel === STUDENT) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(STUDENT));
                        }
                      }}
                    />
                    <label className="form-check-label">{STUDENT}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.jobLevel === OFFICER}
                      name="jobLevel"
                      value={OFFICER}
                      onClick={() => {
                        if (filtersState.jobLevel === OFFICER) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(OFFICER));
                        }
                      }}
                    />
                    <label className="form-check-label">{OFFICER}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.jobLevel === EXECUTIVE}
                      name="jobLevel"
                      value={EXECUTIVE}
                      onClick={() => {
                        if (filtersState.jobLevel === EXECUTIVE) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(EXECUTIVE));
                        }
                      }}
                    />
                    <label className="form-check-label">{EXECUTIVE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.jobLevel === MANAGER}
                      name="jobLevel"
                      value={MANAGER}
                      onClick={() => {
                        if (filtersState.jobLevel === MANAGER) {
                          dispatch(filterJobByJobLevel(""));
                        } else {
                          dispatch(filterJobByJobLevel(MANAGER));
                        }
                      }}
                    />
                    <label className="form-check-label">{MANAGER}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#salary"
                  aria-expanded="true"
                  aria-controls="salary"
                >
                  Salary
                </button>
              </h2>
              <div
                id="salary"
                className="accordion-collapse collapse"
                aria-labelledby="salary"
                data-bs-parent="#salary"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={filtersState.salary === LESS_THAN_TEN_THOUSAND}
                      name="salary"
                      value={LESS_THAN_TEN_THOUSAND}
                      onClick={() => {
                        if (filtersState.salary === LESS_THAN_TEN_THOUSAND) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(filterJobBySalary(LESS_THAN_TEN_THOUSAND));
                        }
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
                      checked={
                        filtersState.salary === TEN_THOUSAND_TO_TWENTY_THOUSAND
                      }
                      value={TEN_THOUSAND_TO_TWENTY_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          TEN_THOUSAND_TO_TWENTY_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(TEN_THOUSAND_TO_TWENTY_THOUSAND)
                          );
                        }
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
                      checked={
                        filtersState.salary ===
                        TWENTY_THOUSAND_TO_THIRTY_THOUSAND
                      }
                      value={TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          TWENTY_THOUSAND_TO_THIRTY_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(
                              TWENTY_THOUSAND_TO_THIRTY_THOUSAND
                            )
                          );
                        }
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
                      checked={
                        filtersState.salary ===
                        THIRTY_THOUSAND_TO_FORTY_THOUSAND
                      }
                      value={THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          THIRTY_THOUSAND_TO_FORTY_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(THIRTY_THOUSAND_TO_FORTY_THOUSAND)
                          );
                        }
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
                      checked={
                        filtersState.salary === FORTY_THOUSAND_TO_FIFTY_THOUSAND
                      }
                      value={FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          FORTY_THOUSAND_TO_FIFTY_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(FORTY_THOUSAND_TO_FIFTY_THOUSAND)
                          );
                        }
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
                      checked={
                        filtersState.salary === FIFTY_THOUSAND_TO_SIXTY_THOUSAND
                      }
                      value={FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          FIFTY_THOUSAND_TO_SIXTY_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(FIFTY_THOUSAND_TO_SIXTY_THOUSAND)
                          );
                        }
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
                      checked={
                        filtersState.salary === SIXTY_THOUSAND_TO_EIGHT_THOUSAND
                      }
                      value={SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                      onClick={() => {
                        if (
                          filtersState.salary ===
                          SIXTY_THOUSAND_TO_EIGHT_THOUSAND
                        ) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(SIXTY_THOUSAND_TO_EIGHT_THOUSAND)
                          );
                        }
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
                      checked={
                        filtersState.salary === EIGHT_THOUSAND_TO_ONE_LAC
                      }
                      value={EIGHT_THOUSAND_TO_ONE_LAC}
                      onClick={() => {
                        if (filtersState.salary === EIGHT_THOUSAND_TO_ONE_LAC) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(
                            filterJobBySalary(EIGHT_THOUSAND_TO_ONE_LAC)
                          );
                        }
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
                      checked={filtersState.salary === COMPATIBLE}
                      value={COMPATIBLE}
                      onClick={() => {
                        if (filtersState.salary === COMPATIBLE) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(filterJobBySalary(COMPATIBLE));
                        }
                      }}
                    />
                    <label className="form-check-label">{COMPATIBLE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="salary"
                      checked={filtersState.salary === NEGOTIABLE}
                      value={NEGOTIABLE}
                      onClick={() => {
                        if (filtersState.salary === NEGOTIABLE) {
                          dispatch(filterJobBySalary(""));
                        } else {
                          dispatch(filterJobBySalary(NEGOTIABLE));
                        }
                      }}
                    />
                    <label className="form-check-label">{NEGOTIABLE}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#salaryType"
                  aria-expanded="true"
                  aria-controls="salaryType"
                >
                  Salary Type
                </button>
              </h2>
              <div
                id="salaryType"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="salaryType"
                      checked={filtersState.salaryType === MONTH}
                      value={MONTH}
                      onClick={() => {
                        if (filtersState.salaryType === MONTH) {
                          dispatch(filterJobBySalaryType(""));
                        } else {
                          dispatch(filterJobBySalaryType(MONTH));
                        }
                      }}
                    />
                    <label className="form-check-label">{MONTH}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="salaryType"
                      checked={filtersState.salaryType === WEEK}
                      value={WEEK}
                      onClick={() => {
                        if (filtersState.salaryType === WEEK) {
                          dispatch(filterJobBySalaryType(""));
                        } else {
                          dispatch(filterJobBySalaryType(WEEK));
                        }
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
                      checked={filtersState.salaryType === HOUR}
                      onClick={() => {
                        if (filtersState.salaryType === HOUR) {
                          dispatch(filterJobBySalaryType(""));
                        } else {
                          dispatch(filterJobBySalaryType(HOUR));
                        }
                      }}
                    />
                    <label className="form-check-label">{HOUR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="salaryType"
                      checked={filtersState.salaryType === YEAR}
                      value={YEAR}
                      onClick={() => {
                        if (filtersState.salaryType === YEAR) {
                          dispatch(filterJobBySalaryType(""));
                        } else {
                          dispatch(filterJobBySalaryType(YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{YEAR}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#experience"
                  aria-expanded="true"
                  aria-controls="experience"
                >
                  Experience
                </button>
              </h2>
              <div
                id="experience"
                className="accordion-collapse collapse"
                aria-labelledby="experience"
                data-bs-parent="#experience"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === FRESH}
                      value={FRESH}
                      onClick={() => {
                        if (filtersState.experience === FRESH) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(FRESH));
                        }
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
                      checked={filtersState.experience === ONE_YEAR}
                      onClick={() => {
                        if (filtersState.experience === ONE_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(ONE_YEAR));
                        }
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
                      checked={filtersState.experience === TWO_YEAR}
                      onClick={() => {
                        if (filtersState.experience === TWO_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(TWO_YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{TWO_YEAR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === THREE_YEAR}
                      value={THREE_YEAR}
                      onClick={() => {
                        if (filtersState.experience === THREE_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(THREE_YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{THREE_YEAR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === FOUR_YEAR}
                      value={FOUR_YEAR}
                      onClick={() => {
                        if (filtersState.experience === FOUR_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(FOUR_YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{FOUR_YEAR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === FIVE_YEAR}
                      value={FIVE_YEAR}
                      onClick={() => {
                        if (filtersState.experience === FIVE_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(FIVE_YEAR));
                        }
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
                      checked={filtersState.experience === SIX_YEAR}
                      onClick={() => {
                        if (filtersState.experience === SIX_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(SIX_YEAR));
                        }
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
                      checked={filtersState.experience === SEVEN_YEAR}
                      onClick={() => {
                        if (filtersState.experience === SEVEN_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(SEVEN_YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{SEVEN_YEAR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === EIGHT_YEAR}
                      value={EIGHT_YEAR}
                      onClick={() => {
                        if (filtersState.experience === EIGHT_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(EIGHT_YEAR));
                        }
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
                      checked={filtersState.experience === NINE_YEAR}
                      onClick={() => {
                        if (filtersState.experience === NINE_YEAR) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(NINE_YEAR));
                        }
                      }}
                    />
                    <label className="form-check-label">{NINE_YEAR}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      checked={filtersState.experience === TEN_YEARS_PLUS}
                      value={TEN_YEARS_PLUS}
                      onClick={() => {
                        if (filtersState.experience === TEN_YEARS_PLUS) {
                          dispatch(filterJobByExperience(""));
                        } else {
                          dispatch(filterJobByExperience(TEN_YEARS_PLUS));
                        }
                      }}
                    />
                    <label className="form-check-label">{TEN_YEARS_PLUS}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#shift"
                  aria-expanded="true"
                  aria-controls="shift"
                >
                  Shift
                </button>
              </h2>
              <div
                id="shift"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shift"
                      checked={filtersState.shift === MORNING}
                      value={MORNING}
                      onClick={() => {
                        if (filtersState.shift === MORNING) {
                          dispatch(filterJobByShift(""));
                        } else {
                          dispatch(filterJobByShift(MORNING));
                        }
                      }}
                    />
                    <label className="form-check-label">{MORNING}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shift"
                      checked={filtersState.shift === EVENING}
                      value={EVENING}
                      onClick={() => {
                        if (filtersState.shift === EVENING) {
                          dispatch(filterJobByShift(""));
                        } else {
                          dispatch(filterJobByShift(EVENING));
                        }
                      }}
                    />
                    <label className="form-check-label">{EVENING}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shift"
                      checked={filtersState.shift === NIGHT}
                      value={NIGHT}
                      onClick={() => {
                        if (filtersState.shift === NIGHT) {
                          dispatch(filterJobByShift(""));
                        } else {
                          dispatch(filterJobByShift(NIGHT));
                        }
                      }}
                    />
                    <label className="form-check-label">{NIGHT}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shift"
                      checked={filtersState.shift === ROUND}
                      value={ROUND}
                      onClick={() => {
                        if (filtersState.shift === ROUND) {
                          dispatch(filterJobByShift(""));
                        } else {
                          dispatch(filterJobByShift(ROUND));
                        }
                      }}
                    />
                    <label className="form-check-label">{ROUND}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#requiredSkills"
                  aria-expanded="true"
                  aria-controls="requiredSkills"
                >
                  Required Skills
                </button>
              </h2>
              <div
                id="requiredSkills"
                className="accordion-collapse collapse"
                aria-labelledby="requiredSkills"
                data-bs-parent="#requiredSkills"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ACCOUNTING}
                      value={ACCOUNTING}
                      onClick={() => {
                        if (filtersState.skills === ACCOUNTING) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ACCOUNTING));
                        }
                      }}
                    />
                    <label className="form-check-label">{ACCOUNTING}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ADMINISTRATIVE}
                      value={ADMINISTRATIVE}
                      onClick={() => {
                        if (filtersState.skills === ADMINISTRATIVE) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ADMINISTRATIVE));
                        }
                      }}
                    />
                    <label className="form-check-label">{ADMINISTRATIVE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ADOBE_ILLUSTRATOR}
                      value={ADOBE_ILLUSTRATOR}
                      onClick={() => {
                        if (filtersState.skills === ADOBE_ILLUSTRATOR) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ADOBE_ILLUSTRATOR));
                        }
                      }}
                    />
                    <label className="form-check-label">
                      Adobe Illustrator
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ADOBE_PHOTOSHOP}
                      value={ADOBE_PHOTOSHOP}
                      onClick={() => {
                        if (filtersState.skills === ADOBE_PHOTOSHOP) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ADOBE_PHOTOSHOP));
                        }
                      }}
                    />
                    <label className="form-check-label">
                      {ADOBE_PHOTOSHOP}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ADOBE_PRIME_CC_ETC}
                      value={ADOBE_PRIME_CC_ETC}
                      onClick={() => {
                        if (filtersState.skills === ADOBE_PRIME_CC_ETC) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ADOBE_PRIME_CC_ETC));
                        }
                      }}
                    />
                    <label className="form-check-label">
                      {ADOBE_PRIME_CC_ETC}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === AI}
                      value={AI}
                      onClick={() => {
                        if (filtersState.skills === AI) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(AI));
                        }
                      }}
                    />
                    <label className="form-check-label">{AI}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === AJAX}
                      value={AJAX}
                      onClick={() => {
                        if (filtersState.skills === AJAX) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(AJAX));
                        }
                      }}
                    />
                    <label className="form-check-label">{AJAX}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANALYSIS}
                      value={ANALYSIS}
                      onClick={() => {
                        if (filtersState.skills === ANALYSIS) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANALYSIS));
                        }
                      }}
                    />
                    <label className="form-check-label">{ANALYSIS}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANALYTICAL_SKILLS}
                      value={ANALYTICAL_SKILLS}
                      onClick={() => {
                        if (filtersState.skills === ANALYTICAL_SKILLS) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANALYTICAL_SKILLS));
                        }
                      }}
                    />
                    <label className="form-check-label">
                      {ANALYTICAL_SKILLS}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANDROID}
                      value={ANDROID}
                      onClick={() => {
                        if (filtersState.skills === ANDROID) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANDROID));
                        }
                      }}
                    />
                    <label className="form-check-label">{ANDROID}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANGULAR_JS}
                      value={ANGULAR_JS}
                      onClick={() => {
                        if (filtersState.skills === ANGULAR_JS) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANGULAR_JS));
                        }
                      }}
                    />
                    <label className="form-check-label">{ANGULAR_JS}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANIMATION}
                      value={ANIMATION}
                      onClick={() => {
                        if (filtersState.skills === ANIMATION) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANIMATION));
                        }
                      }}
                    />
                    <label className="form-check-label">{ANIMATION}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ANSYS}
                      value={ANSYS}
                      onClick={() => {
                        if (filtersState.skills === ANSYS) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ANSYS));
                        }
                      }}
                    />
                    <label className="form-check-label">{ANSYS}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === APACHE}
                      value={APACHE}
                      onClick={() => {
                        if (filtersState.skills === APACHE) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(APACHE));
                        }
                      }}
                    />
                    <label className="form-check-label">{APACHE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === APPLICATION_DEVELOPMENT}
                      value={APPLICATION_DEVELOPMENT}
                      onClick={() => {
                        if (filtersState.skills === APPLICATION_DEVELOPMENT) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(APPLICATION_DEVELOPMENT));
                        }
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
                      checked={filtersState.skills === ARCHITECTURE}
                      value={ARCHITECTURE}
                      onClick={() => {
                        if (filtersState.skills === ARCHITECTURE) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ARCHITECTURE));
                        }
                      }}
                    />
                    <label className="form-check-label">{ARCHITECTURE}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ARTS}
                      value={ARTS}
                      onClick={() => {
                        if (filtersState.skills === ARTS) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ARTS));
                        }
                      }}
                    />
                    <label className="form-check-label">{ARTS}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === ASP_DOT_NET}
                      value={ASP_DOT_NET}
                      onClick={() => {
                        if (filtersState.skills === ASP_DOT_NET) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(ASP_DOT_NET));
                        }
                      }}
                    />
                    <label className="form-check-label">{ASP_DOT_NET}</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={filtersState.skills === BLOCKCHAIN}
                      value={BLOCKCHAIN}
                      onClick={() => {
                        if (filtersState.skills === BLOCKCHAIN) {
                          dispatch(filterJobBySkill(""));
                        } else {
                          dispatch(filterJobBySkill(BLOCKCHAIN));
                        }
                      }}
                    />
                    <label className="form-check-label">{BLOCKCHAIN}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-group-item">
        <div className="accordion accordion-flush">
          <div className="accordion-group">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#jobClass"
                  aria-expanded="true"
                  aria-controls="jobCLass"
                >
                  Job Class
                </button>
              </h2>
              <div
                id="jobClass"
                className="accordion-collapse collapse"
                aria-labelledby="locationHeading"
                data-bs-parent="#locationAccordion"
              >
                <div className="input-group accordion-body d-flex flex-column">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobClass"
                      value={FEATURE}
                      checked={filtersState.jobClass === FEATURE}
                      onClick={() => {
                        if (filtersState.jobClass === FEATURE) {
                          dispatch(filterJobByJobClass(""));
                        } else {
                          dispatch(filterJobByJobClass(FEATURE));
                        }
                      }}
                    />
                    <label className="form-check-label">{FEATURE}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiltersBar;
