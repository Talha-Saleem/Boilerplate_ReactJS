import { Job } from "../../model/jobs/job";


export interface ApiResponse {
    statusCode: number,
    message: string,
    data: Array<Job> | null
}