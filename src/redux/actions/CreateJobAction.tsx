import { Dispatch } from "react";
import { handleCreateJob } from "../../apis/jobs/api.jobs";
import { Job } from "../../model/jobs/job";
import { JOBS_FAILURE, JOBS_SUCCESS } from "../Constants";
import { IJobFailure, IJobSuccess } from "../model/ActionsInterface.d";
import { ApiResponse } from "../model/ApiResponse.d";

const createJobSuccess = (job: Array<Job>) => ({
  type: JOBS_SUCCESS,
  payload: job,
});

const createJobFailure = (data: ApiResponse) => ({
  type: JOBS_FAILURE,
  payload: data,
});

export const createJob =
  (job: any, allJobs: Array<Job>) =>
  async (dispatch: Dispatch<IJobSuccess | IJobFailure>) => {
    const jobs: ApiResponse = await handleCreateJob(job);
    if (jobs.statusCode === 200) {
      // if api call is successful then make changes to the frontend, called responsiveness
      job.id = jobs.data;
      console.log("job id is: ", job.id);
      allJobs.push(job);
      dispatch(createJobSuccess(allJobs));
    } else {
      dispatch(createJobFailure(jobs));
    }
  };
