import { combineReducers } from "redux";
import { counterSlice } from "./counterSlice";
import {ListOfUsers} from '../login/listofUsers.slice'
const rootreducer = combineReducers({
    counter: counterSlice.reducer,
    login_data: ListOfUsers.reducer,
})
export default rootreducer;