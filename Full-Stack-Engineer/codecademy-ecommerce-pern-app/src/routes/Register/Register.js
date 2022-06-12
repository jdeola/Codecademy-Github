import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '../../components/TextField/TextField';

import '../Login/Login.css';
// import { registerUser } from '../../store/auth/Auth.reducers';
import { registerUser } from '../../store/auth/Auth.actions';

import * as Yup from 'yup';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  // Registration handler
  const handleRegister = async (credentials) => {
    try {
      setIsLoading(true);
      await dispatch(registerUser(credentials));
      setIsLoading(false);
      history.push('/');
    } catch(err) {
      setIsLoading(false);
    }
  }

  // Validation schema for registration form
  const registrationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),

    password: Yup.string()
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
  })

  return (
    <div className="app">
      <div className="formComp">
        <div className="formWrapper">
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={registrationSchema}
            validateOnBlur
            onSubmit={async (data) => {
              const { confirmPassword, ...credentials } = data;
              await handleRegister(credentials);
            }}
          >
            <Form className="baseForm">
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">Register</h1>
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
                type="password"
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                id="confirm-password-input"
                type="password"
              />
              {
                error && <div>{error}</div>
              }
              <Button variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</Button>
              <Divider />
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p>Register with</p>
              </div>
              <div className="social-btn-container">
                <Button variant="contained" className="facebook-btn">Facebook</Button>
                <Button variant="contained" className="google-btn">Google</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;