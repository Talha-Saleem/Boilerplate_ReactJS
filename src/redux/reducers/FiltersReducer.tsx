import { PayloadAction } from "@reduxjs/toolkit";
import { IFilterJob } from "../../model/jobs/job";
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

const data: IFilterJob = {
  postName: "",
  country: "",
  qualification: "",
  jobType: "",
  jobLevel: "",
  skills: "",
  salary: "",
  salaryType: "",
  jobClass: "",
  shift: "",
  experience: "",
  company: "",
  description: "",
  vacancies: 0,
  postedBy: "",
};
const initialState = data;

const FiltersReducer = (
  state = initialState,
  action: PayloadAction<string>
) => {
  switch (action.type) {
    case POST_NAME:
      return {
        ...state,
        postName: action.payload,
      };
    case COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case QUALIFICATION:
      return {
        ...state,
        qualification: action.payload,
      };
    case JOB_TYPE:
      return {
        ...state,
        jobType: action.payload,
      };
    case JOB_LEVEL:
      return {
        ...state,
        jobLevel: action.payload,
      };
    case SALARY:
      return {
        ...state,
        salary: action.payload,
      };
    case SALARY_TYPE:
      return {
        ...state,
        salaryType: action.payload,
      };
    case SHIFT:
      return {
        ...state,
        shift: action.payload,
      };
    case EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    case JOB_CLASS:
      return {
        ...state,
        jobClass: action.payload,
      };
    case SKILL:
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
};

export default FiltersReducer;
