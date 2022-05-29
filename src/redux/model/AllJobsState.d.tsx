import { Job } from "../../model/jobs/job";
import { ApiResponse } from "./ApiResponse.d";


export interface AllJobsState {
    data: Array<Job>,
    err: ApiResponse

}