import { Dispatch } from "react";
import { handleUpdate } from "../../apis/jobs/api.jobs";
import { Job } from "../../model/jobs/job";
import { JOBS_FAILURE, JOBS_SUCCESS } from "../Constants";
import { IJobFailure, IJobSuccess } from "../model/ActionsInterface.d";
import { ApiResponse } from "../model/ApiResponse.d";

const updateJobSuccess = (job: Array<Job>) => ({
  type: JOBS_SUCCESS,
  payload: job,
});

const updateJobFailure = (data: ApiResponse) => ({
  type: JOBS_FAILURE,
  payload: data,
});

export const updateJobAction =
  (job: any, allJobs: Array<Job>) =>
  async (dispatch: Dispatch<IJobSuccess | IJobFailure>) => {
    const jobs: ApiResponse = await handleUpdate(job);

    if (jobs.statusCode === 200) {
      const index = allJobs.findIndex(
        (obj: { [x: string]: any }) => obj.id === job.id
      );
      const newJobs = allJobs;
      newJobs[index] = job;
      dispatch(updateJobSuccess(newJobs));
    } else {
      dispatch(updateJobFailure(jobs));
    }
  };
