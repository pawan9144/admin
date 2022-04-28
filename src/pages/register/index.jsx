


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useDispatch } from 'react-redux';
import {signup} from "../../redux/action/action"
import {Link} from "react-router-dom"

const initalValues = {
  email: "",
  phoneNumber:"",
  fullName: "",
  password: "",
};




const theme = createTheme();

export const Register = () => {
  const dispatch = useDispatch()
  return (
    
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs"> 
      <Typography variant="h4">
        Register
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          phoneNumber: string().required("Please enter phone").min(2, "Name too short"),
          fullName: string().required("Please enter name"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          dispatch(signup(values))

          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form >
            <Field
              name="email"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="phoneNumber"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="number"
              fullWidth
              error={Boolean(errors.phoneNumber) && Boolean(touched.phoneNumber)}
              helperText={Boolean(touched.phoneNumber) && errors.phoneNumber}
      
            />
            <Box height={14} />

            <Field
              name="fullName"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="fullName"
              fullWidth
              error={Boolean(errors.fullName) && Boolean(touched.fullName)}
              helperText={Boolean(touched.fullName) && errors.fullName}
            />
            <Box height={14} />
            <Field
              name="password"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              // disabled={!isValid || !dirty}

            >
              Sign up
            </Button>
            <span>if user already register so,<Link to="/" >Login</Link> </span>
          </Form>
        )}
      </Formik>
      </Container>
      </ThemeProvider>
  );
};






// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// import { Formik, Form, ErrorMessage, Field } from "formik";
// import * as Yup from "yup";


// export const Register = () => {
//   const formData = {
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//   };
//   const [setError] = useState();

//   const numberRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//   const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//   const SignupSchema = Yup.object().shape({ 
//     fullName: Yup.string()
//       .min(3, "Too Short!")
//       .max(15, "Too Long!")
//       .required("Required"),
//     phone: Yup.string()
//       .required("Required")
//       .matches(numberRegExp , "Phone number is not valid")
//       .min(10, "to short")
//       .max(10, "to long"),
//     email: Yup.string()
//       .email("Invalid email")   
//       .required("Required")
//       .matches(EmailRegex, "email not validate"),
//     password: Yup.string()
//       .min(6, "Password Must br 8 Char")
//       .max(15, "Too Long!")
//       .required("Required")
//       .matches(passwordRegex, "Password not validate"),
//   });

//   let navigate = useNavigate()
                                  

//   const handlesubmit = async (formData) => {
//     try {
//       const url = "https://modern-fox-4.loca.lt/api/register";
//       const { formData: res } = await axios.post(url, formData);
//       navigate("/");
//       console.log(res);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   console.log(">>>>>>>>..", formData);

//   return (
//     <div>
//       <div>
//         <div >


//           <Formik
//             initialValues={formData}
//             validationSchema={SignupSchema}
//             onSubmit={handlesubmit}
//           >
//             <div>
//               <Form autoComplete="off"> 
//                 <h1>Register</h1>
//                 <Field
//                   type="text"
//                   placeholder="First Name"
//                   name="fullName"
                 
//                 />
//                 <p className="text-danger">
//                   <ErrorMessage name="fullName" />
//                 </p>

//                 <Field
//                   type="tel"
//                   placeholder="Mobile Number"
//                   name="phone"
          
//                 />
//                 <p className="text-danger">
//                   <ErrorMessage name="number" />
//                 </p>

//                 <Field
//                   type="email"
//                   placeholder="Email"
//                   name="email"
      
//                 />
//                 <p className="text-danger">
//                   <ErrorMessage name="email" />
//                 </p>

//                 <Field
//                   type="password"
//                   placeholder="Password"
//                   name="password"
 
//                 />
//                 <p className="text-danger">
//                   <ErrorMessage name="password" />
//                 </p>

//                 <button
//                   type="submit"
        
//                 >
//                   Sing Up
//                 </button>
//               </Form>
//             </div>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

