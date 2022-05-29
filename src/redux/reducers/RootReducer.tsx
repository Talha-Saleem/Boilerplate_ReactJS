import { combineReducers } from "redux";
import GetAllJobsReducer from "./GetAllJobsReducer";
import FiltersReducer from "./FiltersReducer";
import { AllJobsState } from "../model/AllJobsState.d";

const rootReducer = combineReducers({
  GetAllJobsReducer,
  FiltersReducer,
});
export default rootReducer;
export interface RootSate {
  GetAllJobsReducer: AllJobsState;
}
