import { Dispatch } from "redux";
import { handleSearchJob } from "../../apis/jobs/api.jobs";
import { Job } from "../../model/jobs/job";
import { JOBS_FAILURE, JOBS_SUCCESS } from "../Constants";
import { IJobFailure, IJobSuccess } from "../model/ActionsInterface.d";
import { ApiResponse } from "../model/ApiResponse.d";

const searchJobSuccess = (job: Array<Job>) => ({
  type: JOBS_SUCCESS,
  payload: job,
});

const searchJobFailure = (err: ApiResponse) => ({
  type: JOBS_FAILURE,
  payload: err,
});

export const searchJob =
  (url: string) => async (dispatch: Dispatch<IJobSuccess | IJobFailure>) => {
    const jobs: ApiResponse = await handleSearchJob(url);
    if (jobs.data) {
      dispatch(searchJobSuccess(jobs.data));
    } else {
      dispatch(searchJobFailure(jobs));
    }
  };
