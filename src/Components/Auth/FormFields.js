import React, { useState } from "react";
import { Field, ErrorMessage, useField } from "formik";

const FormFields = ({ label, id, placeholder, type, col }) => {
  const [show, setShow] = useState(false);
  const [meta] = useField(id);
  // console.log(useField);
  return type !== "password" ? (
    <div className={`col-${col}`}>
      <label htmlFor={id}>{label}</label>
      <Field
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage name={id} component="div" className="error-text" />
    </div>
  ) : (
    <div className={`col-${col}`}>
      <label htmlFor={id}>{label}</label>
      <div
        className={`d-flex password-input ${
          meta.touched && meta.error && "error"
        }`}
      >
        <Field
          className={`form-control ${
            meta.touched && meta.error && "is-invalid"
          }`}
          id={id}
          name={id}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          style={{ border: "none" }}
        />
        <button
          type="button"
          className="password-button"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <i className="fas fa-eye"></i>
          ) : (
            <i className="fas fa-eye-slash"></i>
          )}
        </button>
      </div>
      <ErrorMessage name={id} component="div" className="error-text" />
    </div>
  );
};

export default FormFields;
