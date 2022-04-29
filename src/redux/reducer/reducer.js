import { collapseToast } from "react-toastify";
import ActionTypes from "../actiontype/actiontype"


const initialState = {
  user: null,
  error: null,
  load:false
}
function Authreducer(state = initialState, action) {


  const { type, payload } = action;

  switch (type) {
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        load:true
      };

    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        load:false
      };

    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: payload,
        load:false
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        load:false

      };

    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        load:false
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };



    default:
      return state;
  }
}

export default Authreducer