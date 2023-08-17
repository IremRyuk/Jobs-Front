import { combineReducers } from "redux";
import { DataJobs, DefaultDataForFilters } from "./reducer/DataJobs";
import {UserData} from './reducer/UserData'
export const AllReducers = combineReducers({
    allData:DataJobs,
    defaultData:DefaultDataForFilters,
    usersData:UserData
})