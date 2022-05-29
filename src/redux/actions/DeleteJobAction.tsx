import { Dispatch } from "react";
import { handleDelete } from "../../apis/jobs/api.jobs";
import { Job } from "../../model/jobs/job";
import { JOBS_SUCCESS, JOBS_FAILURE } from "../Constants";
import { IJobFailure, IJobSuccess } from "../model/ActionsInterface.d";
import { ApiResponse } from "../model/ApiResponse.d";

const deleteJobSuccess = (jobs: Array<Job>) => ({
  type: JOBS_SUCCESS,
  payload: jobs,
});

const deleteJobFailure = (err: ApiResponse) => ({
  type: JOBS_FAILURE,
  payload: err,
});

export const deleteJobAction =
  (id: string, allJobs: Array<Job>) =>
  async (dispatch: Dispatch<IJobSuccess | IJobFailure>) => {
    const jobs: ApiResponse = await handleDelete(id);
    if (jobs.statusCode === 200) {
      const index = allJobs.findIndex((obj: any) => obj.id === id);

      const newJobs = [...allJobs.slice(0, index), ...allJobs.slice(index + 1)];
      dispatch(deleteJobSuccess(newJobs));
    } else {
      dispatch(deleteJobFailure(jobs));
    }
  };
