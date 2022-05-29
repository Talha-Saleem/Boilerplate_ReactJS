import { Job } from "../../model/jobs/job";
import { ApiResponse } from "./ApiResponse.d";


export interface IJobSuccess {
  type: string,
  payload: Array<Job>,
}
export interface IJobFailure {
  type: string,
  payload: ApiResponse,
}

