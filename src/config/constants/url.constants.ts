const BASE_URL = "http://localhost:5001/jobvictor-fe931/us-central1";

export const SEARCH_JOB_URL = `${BASE_URL}/api/jobs/search?`;

export const GET_ALL_JOBS_URL = `${BASE_URL}/api/jobs/get`;

export const CREATE_JOB_URL = `${BASE_URL}/api/jobs/create`;

export const DELETE_JOB_URL = `${BASE_URL}/api/jobs/delete?jobId=`;

export const UPDATE_JOB_URL = `${BASE_URL}/api/jobs/update?jobId=`;

export const GET_USER_JOBS = `${BASE_URL}/api/jobs/getUserJobs?uid=`;

export const NEXT_JOBS = `${BASE_URL}/api/jobs/nextJobs?jobId=`;

export const PREVIOUS_JOBS = `${BASE_URL}/api/jobs/previousJobs?jobId=`;

export const CREATE_USER = `${BASE_URL}/api/user/create`;
