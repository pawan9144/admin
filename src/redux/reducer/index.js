import { combineReducers } from "redux";
import Authreducer from "./reducer";


export const reducers = combineReducers({
  auth:Authreducer,

});