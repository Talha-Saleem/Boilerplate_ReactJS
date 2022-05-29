import { Dispatch } from "react";
import { fetchData } from "../../apis/jobs/api.jobs";
import { GET_ALL_JOBS_URL } from "../../config/constants/url.constants";
import { Job } from "../../model/jobs/job";
import { JOBS_SUCCESS, JOBS_FAILURE } from "../Constants";
import { IJobFailure, IJobSuccess } from "../model/ActionsInterface.d";
import { ApiResponse } from "../model/ApiResponse.d";

const getJobsSuccess = (jobs: Array<Job>) => ({
  type: JOBS_SUCCESS,
  payload: jobs,
});

const getJobsFailure = (err: ApiResponse) => ({
  type: JOBS_FAILURE,
  payload: err,
});

export const getAllJobs =
  () => async (dispatch: Dispatch<IJobSuccess | IJobFailure>) => {
    const jobs: ApiResponse = await fetchData(GET_ALL_JOBS_URL);
    if (jobs.data) {
      dispatch(getJobsSuccess(jobs.data));
    } else {
      dispatch(getJobsFailure(jobs));
    }
  };
