import React, { useState } from "react";
import { Formik, Form } from "formik";
import LoginButton from "./GoogleLoginButton";
import "./style.css";
import { Modal } from "react-bootstrap";

import FormFields from "./FormFields";
import { signUpFieldsConfig, validateSignUpSchema } from "../../common/config";
import Api from "../../Api";
import { toast } from "react-toastify";
import ButtonLoader from "../ButtonLoader";

const SignUp = ({ show, handleClose, showSignIn }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSignUp = async (values) => {
    setLoading(true);
    const response = await Api.post("register", values);
    console.log(response);
    if (response.status === 201) {
      handleClose();
      toast.success(response.message);
    } else toast.error(response.message);
    setLoading(false);
  };

  const SignUpForm = () => {
    return signUpFieldsConfig.map((item, index) => {
      if (index % 2 === 0)
        return (
          <div className="form-row mb-3 " key={index}>
            <FormFields
              label={item.label}
              id={item.id}
              placeholder={item.placeholder}
              type={item.type}
              col={6}
            />
            <FormFields
              label={signUpFieldsConfig[index + 1].label}
              id={signUpFieldsConfig[index + 1].id}
              placeholder={signUpFieldsConfig[index + 1].placeholder}
              type={signUpFieldsConfig[index + 1].type}
              col={6}
            />
          </div>
        );
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phone: "",
              confirmPassword: "",
            }}
            validationSchema={validateSignUpSchema}
            onSubmit={(values) => {
              handleSignUp(values);
            }}
          >
            <Form className="container">
              <h3>Sign Up</h3>
              <div className="d-flex justify-content-center ">
                <LoginButton />
              </div>
              <br />
              <div className="text-center mb-3 ">
                <h5>
                  <hr />
                  or
                  <hr />
                </h5>
              </div>
              <SignUpForm />

              {"Already have an account. "}
              <button
                className="sign-up-change"
                type="button"
                onClick={showSignIn}
              >
                {"Sign In"}
              </button>
              <button
                className="submit btn btn-primary btn-outline-primary mt-5 float-right"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <ButtonLoader height={30} width={80} /> : "Submit"}
              </button>
            </Form>
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
