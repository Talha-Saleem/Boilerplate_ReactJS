import { PayloadAction } from "@reduxjs/toolkit";
import { JOBS_FAILURE, JOBS_SUCCESS } from "../Constants";
import { Job } from "../../model/jobs/job";
import { AllJobsState } from "../model/AllJobsState.d";
import { ApiResponse } from "../model/ApiResponse.d";

const err: ApiResponse = {
  statusCode: 0,
  message: "",
  data: null,
};
const initialState: AllJobsState = { data: [], err };

const GetAllJobsReducer = (
  state = initialState,
  action: PayloadAction<Job | ApiResponse>
) => {
  switch (action.type) {
    case JOBS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case JOBS_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default GetAllJobsReducer;
