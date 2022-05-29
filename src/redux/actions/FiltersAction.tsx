import {
  COUNTRY,
  EXPERIENCE,
  JOB_CLASS,
  JOB_LEVEL,
  JOB_TYPE,
  POST_NAME,
  QUALIFICATION,
  SALARY,
  SALARY_TYPE,
  SHIFT,
  SKILL,
} from "../Constants";

export const filterJobByPostName = (postName: string) => ({
  type: POST_NAME,
  payload: postName,
});

export const filterJobByCountry = (countryName: string) => ({
  type: COUNTRY,
  payload: countryName,
});

export const filterJobByJobType = (jobType: string) => ({
  type: JOB_TYPE,
  payload: jobType,
});

export const filterJobByJobLevel = (jobLevel: string) => ({
  type: JOB_LEVEL,
  payload: jobLevel,
});

export const filterJobBySalary = (salary: string) => ({
  type: SALARY,
  payload: salary,
});

export const filterJobBySalaryType = (salaryType: string) => ({
  type: SALARY_TYPE,
  payload: salaryType,
});

export const filterJobByQualification = (qualification: string) => ({
  type: QUALIFICATION,
  payload: qualification,
});

export const filterJobByExperience = (experience: string) => ({
  type: EXPERIENCE,
  payload: experience,
});

export const filterJobByShift = (shift: string) => ({
  type: SHIFT,
  payload: shift,
});

export const filterJobBySkill = (skill: string) => ({
  type: SKILL,
  payload: skill,
});

export const filterJobByJobClass = (jobClass: string) => ({
  type: JOB_CLASS,
  payload: jobClass,
});
