

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useDispatch,useSelector} from "react-redux";
import { signin } from "../../redux/action/action"
import { Link } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import "./style.css";
import { ToastContainer } from 'react-toastify';
// import { CloseOutlined } from '@mui/icons-material';



const initalValues = {
  email: "",
  password: "",
};




const theme = createTheme();

export const Login = () => {

  const dispatch = useDispatch()

  const data  = useSelector((state)=>state.auth)
  


  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h4">
          Login..
        </Typography>
        <Formik
          initialValues={initalValues}
          validationSchema={object({
            email: string().required("Please enter email").email("Invalid email"),

            password: string()
              .required("Please enter password")
              .min(7, "Password should be minimum 7 characters long"),
          })}
          onSubmit={(values, formikHelpers) => {
            dispatch(signin(values))
      
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
                {/* {loading && (
              <SpinnerCircular className='loginspinner'/>
              )} */}
                {data.load ? <SpinnerCircular className='loginspinner' /> : null}
                Login
              </Button>
              <span>if user already register so,<Link to="/register" >Register</Link> </span>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};
