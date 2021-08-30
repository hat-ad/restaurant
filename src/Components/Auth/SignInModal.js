import React from "react";
import { Formik, Form } from "formik";
import LoginButton from "./GoogleLoginButton";
import "./style.css";
import { Modal } from "react-bootstrap";

import FormFields from "./FormFields";
import { signInFieldsConfig, validateSignInSchema } from "../../common/config";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Actions/authActions";
import { ButtonLoader } from "..";

const SignIn = ({ show, handleClose, showSignUp }) => {
  const dispatch = useDispatch();
  const authDetails = useSelector((state) => state.auth);
  const SignInForm = () => {
    return signInFieldsConfig.map((item, index) => (
      <div className="form-row mb-3 " key={index}>
        <FormFields
          label={item.label}
          id={item.id}
          placeholder={item.placeholder}
          type={item.type}
          col={12}
        />
      </div>
    ));
  };

  const handleSignIn = async (values) => {
    const data = {
      username: values.emailLogin,
      password: values.passwordLogin,
    };
    dispatch(loginUser(data));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{
              emailLogin: "",
              passwordLogin: "",
            }}
            validationSchema={validateSignInSchema}
            onSubmit={handleSignIn}
          >
            <Form className="container">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-center ">
                <LoginButton handleClose={handleClose} />
              </div>
              <br />
              <div className="text-center mb-3 ">
                <h5>
                  <hr />
                  or
                  <hr />
                </h5>
              </div>
              <SignInForm />
              {"Don't have an account? "}
              <button
                className="sign-up-change"
                type="button"
                onClick={showSignUp}
              >
                {"Sign Up"}
              </button>
              <button
                className="submit btn btn-primary btn-outline-primary mt-5 float-right"
                type="submit"
                disabled={authDetails.authLoading}
              >
                {authDetails.authLoading ? (
                  <ButtonLoader height={30} width={80} />
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
