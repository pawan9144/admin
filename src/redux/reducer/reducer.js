import ActionTypes from "../actiontype/actiontype"


const initialState = {
  user: null,
  error: null,
}
function Authreducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: payload,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,

      };

    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: payload,
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