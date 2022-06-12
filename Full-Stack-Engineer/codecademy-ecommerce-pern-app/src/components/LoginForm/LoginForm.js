import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';
import Button from '@material-ui/core/Button';

import { loginUser } from '../../store/auth/Auth.reducers';

const LoginForm = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
    password: ""
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),

    password: Yup.string()
      .required("Password is required")
  });

  // Login handler
  const handleLogin = async (credentials) => {
    try {
      setIsLoading(true);
      await dispatch(loginUser(credentials));
      setIsLoading(false);
      history.push('/');
    } catch(err) {
      setIsLoading(false);
    }
  }

  return (
      <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { email, password } = values;
              await handleLogin({username: email, password});
            }}
          >
            <Form className="baseForm">
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">Log in</h1>
              </header>
              <TextField
                label="Email"
                name="email"
                id="email-input"
              />
              <TextField
                label="Password"
                name="password"
                id="password-input"
              />
              {
                error && <div>{error}</div>
              }
              <Button variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</Button>
              {/* <p>Forgotten your password?</p>
              <Divider />
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p>Sign in with</p>
              </div>
              <div className="social-btn-container">
                <Button variant="contained" className="facebook-btn">Facebook</Button>
                <Button variant="contained" className="google-btn">Google</Button>
              </div> */}
            </Form>
          </Formik>
  );
}

export default LoginForm;


  // <Formik
  //   initialValues={{email: '', password: ''}}
  //   onSubmit={async (values, { setSubmitting }) => {
  //     const { email, password } = values;
  //     await handleLogin({username: email, password});
  //   }}
  // >
  //   <Form className="baseForm">
  //     <header className="baseFormHeader">
  //       <h1 className="baseFormHeading">Log in</h1>
  //     </header>
  //     <TextField
  //       label="Email"
  //       name="email"
  //       id="email-input"
  //     />
  //     <TextField
  //       label="Password"
  //       name="password"
  //       id="password-input"
  //     />
  //     {
  //       error && <div>{error}</div>
  //     }
  //     <Button variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</Button>
  //     <p>Forgotten your password?</p>
  //     <Divider />
  //     <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
  //       <p>Sign in with</p>
  //     </div>
  //     <div className="social-btn-container">
  //       <Button variant="contained" className="facebook-btn">Facebook</Button>
  //       <Button variant="contained" className="google-btn">Google</Button>
  //     </div>
  //   </Form>
  // </Formik>