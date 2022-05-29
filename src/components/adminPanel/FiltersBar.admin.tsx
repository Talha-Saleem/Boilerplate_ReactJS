import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchData, handleSearchJob } from "../../apis/jobs/api.jobs";
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
import {
  GET_ALL_JOBS_URL,
  SEARCH_JOB_URL,
} from "../../config/constants/url.constants";
import { ApiResponse } from "../../redux/model/ApiResponse.d";

function AdminFiltersBar(props: any) {
  const [postName, setPostName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [jobLevel, setJobLevel] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [salaryType, setSalaryType] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [shift, setShift] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [jobClass, setJobClass] = useState<string>("");

  const navigate = useNavigate();

  const handleFilter = async () => {
    const url: string = SEARCH_JOB_URL;
    let query = "";
    if (postName != "") {
      query += `postName=${postName}`;
    }
    if (country != "" && country) {
      if (query != "") {
        query += `&country=${country}`;
      } else {
        query += `country=${country}`;
      }
    }
    if (qualification != "" && qualification) {
      if (query != "") {
        query += `&qualification=${qualification}`;
      } else {
        query += `qualification=${qualification}`;
      }
    }
    if (salaryType != "" && salaryType) {
      if (query != "") {
        query += `&salaryType=${salaryType}`;
      } else {
        query += `salaryType=${salaryType}`;
      }
    }
    if (salary != "" && salary) {
      if (query != "") {
        query += `&salary=${salary}`;
      } else {
        query += `salary=${salary}`;
      }
    }
    if (shift != "" && shift) {
      if (query != "") {
        query += `&shift=${shift}`;
      } else {
        query += `shift=${shift}`;
      }
    }
    if (jobLevel != "" && jobLevel) {
      if (query != "") {
        query += `&jobLevel=${jobLevel}`;
      } else {
        query += `jobLevel=${jobLevel}`;
      }
    }
    if (experience != "" && experience) {
      if (query != "") {
        query += `&experience=${experience}`;
      } else {
        query += `experience=${experience}`;
      }
    }
    if (jobType != "" && jobType) {
      if (query != "") {
        query += `&jobType=${jobType}`;
      } else {
        query += `jobType=${jobType}`;
      }
    }
    if (skills != "" && skills) {
      if (query != "") {
        query += `&skill=${skills}`;
      } else {
        query += `skill=${skills}`;
      }
    }
    if (jobClass != "" && jobClass) {
      if (query != "") {
        query += `&jobClass=${jobClass}`;
      } else {
        query += `jobClass=${jobClass}`;
      }
    }
    if (query != "") {
      navigate(`/adminPanel?${query}`);
      const result: ApiResponse = await handleSearchJob(url + query);
      props.setJobs(result.data);
    } else {
      navigate("/adminPanel");
      const result = await fetchData(GET_ALL_JOBS_URL);
      props.setJobs(result.data);
    }
  };
  useEffect(() => {
    handleFilter();
  }, [
    country,
    jobType,
    salary,
    salaryType,
    qualification,
    jobClass,
    shift,
    skills,
    experience,
    jobLevel,
  ]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleFilter();
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
                      onClick={() => setCountry("Sweden")}
                    >
                      {SWEDEN}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => setCountry(US)}
                    >
                      {US}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => setCountry(UK)}
                    >
                      {UK}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => setCountry(GERMANY)}
                    >
                      {GERMANY}
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => setCountry(CANADA)}
                    >
                      {CANADA}
                    </li>
                    <li
                      className="list-group-item text-end text-info"
                      onClick={() => {
                        if (country !== "") {
                          setCountry("");
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
                      checked={jobType == FULL_TIME}
                      value={FULL_TIME}
                      onClick={() => {
                        if (jobType === FULL_TIME) {
                          setJobType("");
                        } else {
                          setJobType(FULL_TIME);
                        }
                      }}
                    />
                    <label className="form-check-label">Full Time</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={jobType == PART_TIME}
                      name="jobType"
                      value={PART_TIME}
                      onClick={() => {
                        if (jobType === PART_TIME) {
                          setJobType("");
                        } else {
                          setJobType(PART_TIME);
                        }
                      }}
                    />
                    <label className="form-check-label">Part Time</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={jobType == CONTRACT}
                      value={CONTRACT}
                      onClick={() => {
                        if (jobType === CONTRACT) {
                          setJobType("");
                        } else {
                          setJobType(CONTRACT);
                        }
                      }}
                    />
                    <label className="form-check-label">Contract</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={jobType == INTERNSHIP}
                      value={INTERNSHIP}
                      onClick={() => {
                        if (jobType === INTERNSHIP) {
                          setJobType("");
                        } else {
                          setJobType(INTERNSHIP);
                        }
                      }}
                    />
                    <label className="form-check-label">Internship</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobType"
                      checked={jobType == TEMPORARY}
                      value={TEMPORARY}
                      onClick={() => {
                        if (jobType === TEMPORARY) {
                          setJobType("");
                        } else {
                          setJobType(TEMPORARY);
                        }
                      }}
                    />
                    <label className="form-check-label">Temporary</label>
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
                      checked={qualification == MATRICULATION}
                      name="qualification"
                      value={MATRICULATION}
                      onClick={() => {
                        if (qualification == MATRICULATION) {
                          setQualification("");
                        } else {
                          setQualification(MATRICULATION);
                        }
                      }}
                    />
                    <label className="form-check-label">Matriculation</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={qualification == INTERMEDIATE}
                      value="Intermediate"
                      onClick={() => {
                        if (qualification == INTERMEDIATE) {
                          setQualification("");
                        } else {
                          setQualification(INTERMEDIATE);
                        }
                      }}
                    />
                    <label className="form-check-label">Intermediate</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={qualification == BACHELOR}
                      value={BACHELOR}
                      onClick={() => {
                        if (qualification == BACHELOR) {
                          setQualification("");
                        } else {
                          setQualification(BACHELOR);
                        }
                      }}
                    />
                    <label className="form-check-label">Bachelor</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="qualification"
                      checked={qualification == MASTER}
                      value={MASTER}
                      onClick={() => {
                        if (qualification == MASTER) {
                          setQualification("");
                        } else {
                          setQualification(MASTER);
                        }
                      }}
                    />
                    <label className="form-check-label">Master</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={qualification == PHD}
                      name="qualification"
                      value={PHD}
                      onClick={() => {
                        if (qualification == PHD) {
                          setQualification("");
                        } else {
                          setQualification(PHD);
                        }
                      }}
                    />
                    <label className="form-check-label">PHD</label>
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
                      checked={jobLevel === SENIOR}
                      name="jobLevel"
                      value="Senior"
                      onClick={() => {
                        if (jobLevel === SENIOR) {
                          setJobLevel("");
                        } else {
                          setJobLevel(SENIOR);
                        }
                      }}
                    />
                    <label className="form-check-label">Senior</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobLevel"
                      checked={jobLevel === JUNIOR}
                      value={JUNIOR}
                      onClick={() => {
                        if (jobLevel === JUNIOR) {
                          setJobLevel("");
                        } else {
                          setJobLevel(JUNIOR);
                        }
                      }}
                    />
                    <label className="form-check-label">Junior</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobLevel"
                      checked={jobLevel === STUDENT}
                      value={STUDENT}
                      onClick={() => {
                        if (jobLevel === STUDENT) {
                          setJobLevel("");
                        } else {
                          setJobLevel(STUDENT);
                        }
                      }}
                    />
                    <label className="form-check-label">Student</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={jobLevel === OFFICER}
                      name="jobLevel"
                      value={OFFICER}
                      onClick={() => {
                        if (jobLevel === OFFICER) {
                          setJobLevel("");
                        } else {
                          setJobLevel(OFFICER);
                        }
                      }}
                    />
                    <label className="form-check-label">Officer</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={jobLevel === EXECUTIVE}
                      name="jobLevel"
                      value={EXECUTIVE}
                      onClick={() => {
                        if (jobLevel === EXECUTIVE) {
                          setJobLevel("");
                        } else {
                          setJobLevel(EXECUTIVE);
                        }
                      }}
                    />
                    <label className="form-check-label">Executive</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={jobLevel === MANAGER}
                      name="jobLevel"
                      value={MANAGER}
                      onClick={() => {
                        if (jobLevel === MANAGER) {
                          setJobLevel("");
                        } else {
                          setJobLevel(MANAGER);
                        }
                      }}
                    />
                    <label className="form-check-label">Manager</label>
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
                      checked={salary === LESS_THAN_TEN_THOUSAND}
                      name="salary"
                      value={LESS_THAN_TEN_THOUSAND}
                      onClick={() => {
                        if (salary === LESS_THAN_TEN_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(LESS_THAN_TEN_THOUSAND);
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
                      checked={salary === TEN_THOUSAND_TO_TWENTY_THOUSAND}
                      value={TEN_THOUSAND_TO_TWENTY_THOUSAND}
                      onClick={() => {
                        if (salary === TEN_THOUSAND_TO_TWENTY_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(TEN_THOUSAND_TO_TWENTY_THOUSAND);
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
                      checked={salary === TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                      value={TWENTY_THOUSAND_TO_THIRTY_THOUSAND}
                      onClick={() => {
                        if (salary === TWENTY_THOUSAND_TO_THIRTY_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(TWENTY_THOUSAND_TO_THIRTY_THOUSAND);
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
                      checked={salary === THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                      value={THIRTY_THOUSAND_TO_FORTY_THOUSAND}
                      onClick={() => {
                        if (salary === THIRTY_THOUSAND_TO_FORTY_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(THIRTY_THOUSAND_TO_FORTY_THOUSAND);
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
                      checked={salary === FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                      value={FORTY_THOUSAND_TO_FIFTY_THOUSAND}
                      onClick={() => {
                        if (salary === FORTY_THOUSAND_TO_FIFTY_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(FORTY_THOUSAND_TO_FIFTY_THOUSAND);
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
                      checked={salary === FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                      value={FIFTY_THOUSAND_TO_SIXTY_THOUSAND}
                      onClick={() => {
                        if (salary === FIFTY_THOUSAND_TO_SIXTY_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(FIFTY_THOUSAND_TO_SIXTY_THOUSAND);
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
                      checked={salary === SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                      value={SIXTY_THOUSAND_TO_EIGHT_THOUSAND}
                      onClick={() => {
                        if (salary === SIXTY_THOUSAND_TO_EIGHT_THOUSAND) {
                          setSalary("");
                        } else {
                          setSalary(SIXTY_THOUSAND_TO_EIGHT_THOUSAND);
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
                      checked={salary === EIGHT_THOUSAND_TO_ONE_LAC}
                      value={EIGHT_THOUSAND_TO_ONE_LAC}
                      onClick={() => {
                        if (salary === EIGHT_THOUSAND_TO_ONE_LAC) {
                          setSalary("");
                        } else {
                          setSalary(EIGHT_THOUSAND_TO_ONE_LAC);
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
                      checked={salary === COMPATIBLE}
                      value={COMPATIBLE}
                      onClick={() => {
                        if (salary === COMPATIBLE) {
                          setSalary("");
                        } else {
                          setSalary(COMPATIBLE);
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
                      checked={salary === NEGOTIABLE}
                      value={NEGOTIABLE}
                      onClick={() => {
                        if (salary === NEGOTIABLE) {
                          setSalary("");
                        } else {
                          setSalary(NEGOTIABLE);
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
                      checked={salaryType === MONTH}
                      value={MONTH}
                      onClick={() => {
                        if (salaryType === MONTH) {
                          setSalaryType("");
                        } else {
                          setSalaryType(MONTH);
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
                      checked={salaryType === WEEK}
                      value={WEEK}
                      onClick={() => {
                        if (salaryType === WEEK) {
                          setSalaryType("");
                        } else {
                          setSalaryType(WEEK);
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
                      checked={salaryType === HOUR}
                      onClick={() => {
                        if (salaryType === HOUR) {
                          setSalaryType("");
                        } else {
                          setSalaryType(HOUR);
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
                      checked={salaryType === YEAR}
                      value={YEAR}
                      onClick={() => {
                        if (salaryType === YEAR) {
                          setSalaryType("");
                        } else {
                          setSalaryType(YEAR);
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
                      checked={experience === FRESH}
                      value={FRESH}
                      onClick={() => {
                        if (experience === FRESH) {
                          setExperience("");
                        } else {
                          setExperience(FRESH);
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
                      checked={experience === ONE_YEAR}
                      onClick={() => {
                        if (experience === ONE_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(ONE_YEAR);
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
                      checked={experience === TWO_YEAR}
                      onClick={() => {
                        if (experience === TWO_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(TWO_YEAR);
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
                      checked={experience === THREE_YEAR}
                      value={THREE_YEAR}
                      onClick={() => {
                        if (experience === THREE_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(THREE_YEAR);
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
                      checked={experience === FOUR_YEAR}
                      value={FOUR_YEAR}
                      onClick={() => {
                        if (experience === FOUR_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(FOUR_YEAR);
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
                      checked={experience === FIVE_YEAR}
                      value={FIVE_YEAR}
                      onClick={() => {
                        if (experience === FIVE_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(FIVE_YEAR);
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
                      checked={experience === SIX_YEAR}
                      onClick={() => {
                        if (experience === SIX_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(SIX_YEAR);
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
                      checked={experience === SEVEN_YEAR}
                      onClick={() => {
                        if (experience === SEVEN_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(SEVEN_YEAR);
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
                      checked={experience === EIGHT_YEAR}
                      value={EIGHT_YEAR}
                      onClick={() => {
                        if (experience === EIGHT_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(EIGHT_YEAR);
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
                      checked={experience === NINE_YEAR}
                      onClick={() => {
                        if (experience === NINE_YEAR) {
                          setExperience("");
                        } else {
                          setExperience(NINE_YEAR);
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
                      checked={experience === TEN_YEARS_PLUS}
                      value={TEN_YEARS_PLUS}
                      onClick={() => {
                        if (experience === TEN_YEARS_PLUS) {
                          setExperience("");
                        } else {
                          setExperience(TEN_YEARS_PLUS);
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
                      checked={shift === MORNING}
                      value={MORNING}
                      onClick={() => {
                        if (shift === MORNING) {
                          setShift("");
                        } else {
                          setShift(MORNING);
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
                      checked={shift === EVENING}
                      value={EVENING}
                      onClick={() => {
                        if (shift === EVENING) {
                          setShift("");
                        } else {
                          setShift(EVENING);
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
                      checked={shift === NIGHT}
                      value={NIGHT}
                      onClick={() => {
                        if (shift === NIGHT) {
                          setShift("");
                        } else {
                          setShift(NIGHT);
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
                      checked={shift === ROUND}
                      value={ROUND}
                      onClick={() => {
                        if (shift === ROUND) {
                          setShift("");
                        } else {
                          setShift(ROUND);
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
                      checked={skills === ACCOUNTING}
                      value={ACCOUNTING}
                      onClick={() => {
                        if (skills === ACCOUNTING) {
                          setSkills("");
                        } else {
                          setSkills(ACCOUNTING);
                        }
                      }}
                    />
                    <label className="form-check-label">Accounting</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="skills"
                      checked={skills === ADMINISTRATIVE}
                      value={ADMINISTRATIVE}
                      onClick={() => {
                        if (skills === ADMINISTRATIVE) {
                          setSkills("");
                        } else {
                          setSkills(ADMINISTRATIVE);
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
                      checked={skills === ADOBE_ILLUSTRATOR}
                      value={ADOBE_ILLUSTRATOR}
                      onClick={() => {
                        if (skills === ADOBE_ILLUSTRATOR) {
                          setSkills("");
                        } else {
                          setSkills(ADOBE_ILLUSTRATOR);
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
                      checked={skills === ADOBE_PHOTOSHOP}
                      value={ADOBE_PHOTOSHOP}
                      onClick={() => {
                        if (skills === ADOBE_PHOTOSHOP) {
                          setSkills("");
                        } else {
                          setSkills(ADOBE_PHOTOSHOP);
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
                      checked={skills === ADOBE_PRIME_CC_ETC}
                      value={ADOBE_PRIME_CC_ETC}
                      onClick={() => {
                        if (skills === ADOBE_PRIME_CC_ETC) {
                          setSkills("");
                        } else {
                          setSkills(ADOBE_PRIME_CC_ETC);
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
                      checked={skills === AI}
                      value={AI}
                      onClick={() => {
                        if (skills === AI) {
                          setSkills("");
                        } else {
                          setSkills(AI);
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
                      checked={skills === AJAX}
                      value={AJAX}
                      onClick={() => {
                        if (skills === AJAX) {
                          setSkills("");
                        } else {
                          setSkills(AJAX);
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
                      checked={skills === ANALYSIS}
                      value={ANALYSIS}
                      onClick={() => {
                        if (skills === ANALYSIS) {
                          setSkills("");
                        } else {
                          setSkills(ANALYSIS);
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
                      checked={skills === ANALYTICAL_SKILLS}
                      value={ANALYTICAL_SKILLS}
                      onClick={() => {
                        if (skills === ANALYTICAL_SKILLS) {
                          setSkills("");
                        } else {
                          setSkills(ANALYTICAL_SKILLS);
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
                      checked={skills === ANDROID}
                      value={ANDROID}
                      onClick={() => {
                        if (skills === ANDROID) {
                          setSkills("");
                        } else {
                          setSkills(ANDROID);
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
                      checked={skills === ANGULAR_JS}
                      value={ANGULAR_JS}
                      onClick={() => {
                        if (skills === ANGULAR_JS) {
                          setSkills("");
                        } else {
                          setSkills(ANGULAR_JS);
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
                      checked={skills === ANIMATION}
                      value={ANIMATION}
                      onClick={() => {
                        if (skills === ANIMATION) {
                          setSkills("");
                        } else {
                          setSkills(ANIMATION);
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
                      checked={skills === ANSYS}
                      value={ANSYS}
                      onClick={() => {
                        if (skills === ANSYS) {
                          setSkills("");
                        } else {
                          setSkills(ANSYS);
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
                      checked={skills === APACHE}
                      value={APACHE}
                      onClick={() => {
                        if (skills === APACHE) {
                          setSkills("");
                        } else {
                          setSkills(APACHE);
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
                      checked={skills === APPLICATION_DEVELOPMENT}
                      value={APPLICATION_DEVELOPMENT}
                      onClick={() => {
                        if (skills === APPLICATION_DEVELOPMENT) {
                          setSkills("");
                        } else {
                          setSkills(APPLICATION_DEVELOPMENT);
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
                      checked={skills === ARCHITECTURE}
                      value={ARCHITECTURE}
                      onClick={() => {
                        if (skills === ARCHITECTURE) {
                          setSkills("");
                        } else {
                          setSkills(ARCHITECTURE);
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
                      checked={skills === ARTS}
                      value={ARTS}
                      onClick={() => {
                        if (skills === ARTS) {
                          setSkills("");
                        } else {
                          setSkills(ARTS);
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
                      checked={skills === ASP_DOT_NET}
                      value={ASP_DOT_NET}
                      onClick={() => {
                        if (skills === ASP_DOT_NET) {
                          setSkills("");
                        } else {
                          setSkills(ASP_DOT_NET);
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
                      checked={skills === BLOCKCHAIN}
                      value={BLOCKCHAIN}
                      onClick={() => {
                        if (skills === BLOCKCHAIN) {
                          setSkills("");
                        } else {
                          setSkills(BLOCKCHAIN);
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
                      checked={jobClass === FEATURE}
                      onClick={() => {
                        if (jobClass === FEATURE) {
                          setJobClass("");
                        } else {
                          setJobClass(FEATURE);
                        }
                      }}
                    />
                    <label className="form-check-label">Feature</label>
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

export default AdminFiltersBar;
