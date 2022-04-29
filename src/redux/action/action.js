import ActionTypes from "../actiontype/actiontype"
import axios from "axios"
import { REACT_APP } from "../../services/env.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signup = (values) =>async(dispatch)=>{

  dispatch({
    type: ActionTypes.REGISTER_REQUEST,
   })

    const url = `${REACT_APP}/api/v1/user`
 
     await axios.post(url, values).then((res)=>{


      localStorage.setItem("Token",JSON.stringify(res.data.data))
 
       dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: res.data.data, 
       })
      
     }).catch((err)=>{

       dispatch({
         type: ActionTypes.REGISTER_FAIL,
         payload: err,
        })
        //  console.log(err)
      })

} 





export const signin = (values) =>async(dispatch)=>{
  toast("skfhdsjfhdsfjsdfjkdshfjds")
  dispatch({
    type: ActionTypes.REGISTER_REQUEST,
  })
  try{
    const url = `${REACT_APP}/api/v1/user/login`
    const res = await axios.post(url, values);
    
    toast.success("skfhdsjfhdsfjsdfjkdshfjds")
    
    localStorage.setItem("userToken",res.data.token)
    
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: res.data.token,
    })
    
    
  }catch(error){
    
    
    toast.error("ooiiiooioijkhljuh") 
    
    dispatch({
      type: ActionTypes.LOGIN_FAIL,
        payload: error,
      });


  }

} 





export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  dispatch({
    type: ActionTypes.LOGOUT,
  });
};








// import ActionTypes from "../actiontype/actiontype"
// import AuthService from "../../service/service";

// export const register = (values) => (dispatch) => {
//   console.log("??????????????????????????",values)
//   return AuthService.register(values).then(
//     (response) => {

//       dispatch({

//         type: ActionTypes.REGISTER_SUCCESS,
//       });
//       dispatch({
//         type: ActionTypes.SET_MESSAGE,
//         payload: response.data.message,
//       });
//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       dispatch({
//         type:ActionTypes.REGISTER_FAIL,
//       });

//       return Promise.reject();
//     }
//   );
// };

// export const login = (username, password) =>(dispatch) => {
//   return AuthService.login(username, password).then(
//     (data) => {
//       dispatch({
//         type: ActionTypes.LOGIN_SUCCESS,
//         payload: { user: data },
//       });
//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       dispatch({
//         type: ActionTypes.LOGIN_FAIL,
//       });
     
//       return Promise.reject();
//     }
//   );
// };
// export const logout = () => (dispatch) => {
//   AuthService.logout();
//   dispatch({
//     type: ActionTypes.LOGOUT,
//   });
// };

















// import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_PENDING } from "./userLogin";
// import { openModal } from "../modal_Action/action";
// import axios from "axios";
// import { BASE_URL } from "../../../Components/config/envCongig";
// export const loginUser = (formData) => async (dispatch) => {
//   await dispatch({ type: LOGIN_PENDING, payload: true })
//   await axios
//     .post(`${BASE_URL}/userLogin`,formData)
//     .then(async(res) => {
//       localStorage.setItem("userToken",res.data.token)
//       await dispatch({ type: LOGIN_SUCCESS, payload: res.data.userName });
//       await dispatch({ type: LOGIN_PENDING, payload: false });
//       await dispatch(openModal(false));
//     })
//     .catch( async(error) => {
//       console.log("Error>>", error);
//       await dispatch({ type: LOGIN_FAILURE, payload: error });
//       await dispatch({ type: LOGIN_PENDING, payload: false });
// })
// }



