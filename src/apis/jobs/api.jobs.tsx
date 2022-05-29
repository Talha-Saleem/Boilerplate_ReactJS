import axios from "axios";
import {
  CREATE_JOB_URL,
  DELETE_JOB_URL,
  GET_USER_JOBS,
  UPDATE_JOB_URL,
} from "../../config/constants/url.constants";
import { auth } from "../../config/firebase.includes";
import { Job } from "../../model/jobs/job";
import { ApiResponse } from "../../redux/model/ApiResponse.d";

const apiResponse: ApiResponse = {
  statusCode: 0,
  message: "",
  data: null,
};

const getHeader = async () => {
  const user = auth.currentUser;
  const token = await user?.getIdToken(true);
  const authStr = "Bearer ".concat(token || "");
  const objHeader = { headers: { authorization: authStr } };
  return objHeader;
};

const fetchData = async (url: string) => {
  try {
    const res = await axios.get(url);
    // console.log('status: ',res.status)
    // if (res.status === 200) {
    apiResponse.data = res.data;
    apiResponse.statusCode = res.status;
    return apiResponse;
    // } else {
    // apiResponse.statusCode = res.data.status;
    // apiResponse.message = res.data.message;
    // return apiResponse;
    // }
  } catch (e: any) {
    apiResponse.statusCode = 0;
    apiResponse.message = e.message;
    return apiResponse;
  }
};

const getUserJobs = async (uid: string) => {
  try {
    const objHeader = await getHeader();
    const res = await axios.get(GET_USER_JOBS + uid, objHeader);
    // if (res.status === 200) {
    const { data } = res;
    apiResponse.statusCode = res.status;
    return data;
    // } else {
    //   alert(res.data.message);
    // }
  } catch (e: any) {
    alert(e.message);
  }
};

const handleSearchJob = async (url: string) => {
  try {
    const res = await axios.get(url);
    // if (res.status === 200) {
    apiResponse.data = res.data;
    apiResponse.statusCode = res.status;
    return apiResponse;
    // } else {
    //   apiResponse.statusCode = res.data.status;
    //   apiResponse.message = res.data.message;
    //   return apiResponse;
    // }
  } catch (e: any) {
    apiResponse.statusCode = 0;
    apiResponse.message = e.message;
    return apiResponse;
  }
};

const handleCreateJob = async (newJob: Job) => {
  try {
    const objHeader = await getHeader();

    const res = await axios.post(CREATE_JOB_URL, newJob, objHeader);
    console.log("response create: ", res.status);

    // if (res.status === 200) {
    apiResponse.statusCode = res.status;
    apiResponse.data = res.data.jobId;
    return apiResponse;
    // } else {
    //   apiResponse.statusCode = res.data.status;
    //   apiResponse.message = res.data.message;
    //   return apiResponse;
    // }
  } catch (e: any) {
    apiResponse.statusCode = 0;
    apiResponse.message = e.message;
    return apiResponse;
  }
};

const handleDelete = async (id: string) => {
  try {
    const objHeader = await getHeader();

    const res = await axios.post(DELETE_JOB_URL + id, null, objHeader);
    // if (res.status === 200) {
    apiResponse.statusCode = res.status;
    return apiResponse;
    // } else {
    //   apiResponse.statusCode = res.data.status;
    //   apiResponse.message = res.data.message;
    //   return apiResponse;
    // }
  } catch (e: any) {
    apiResponse.statusCode = 0;
    apiResponse.message = e.message;
    return apiResponse;
  }
};

const handleUpdate = async (job: any) => {
  try {
    const objHeader = await getHeader();

    const res = await axios.put(UPDATE_JOB_URL + job.id, job, objHeader);
    // if (res.status === 200) {
    apiResponse.statusCode = res.status;
    return apiResponse;
    // } else {
    //   apiResponse.statusCode = res.data.status;
    //   apiResponse.message = res.data.message;
    //   return apiResponse;
    // }
  } catch (e: any) {
    apiResponse.statusCode = 0;
    apiResponse.message = e.message;
    return apiResponse;
  }
};

export {
  fetchData,
  handleSearchJob,
  handleCreateJob,
  handleDelete,
  handleUpdate,
  getUserJobs,
};
