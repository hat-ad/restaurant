import * as Yup from "yup";
import * as animationData from "../Assets/animatedLoader.json";
import * as buttonAnimation from "../Assets/loader.json";

const defaultLoaderOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const buttonLoaderOptions = {
  loop: true,
  autoplay: true,
  animationData: buttonAnimation.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const signUpFieldsConfig = [
  {
    label: "First Name",
    id: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  {
    label: "Last Name",
    id: "lastName",
    placeholder: "Last Name",
    type: "text",
  },
  {
    label: "Email",
    id: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    label: "Phone",
    id: "phone",
    placeholder: "Phone",
    type: "tel",
  },
  {
    label: "Password",
    id: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    label: "Confirm Password",
    id: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
  },
];

const signInFieldsConfig = [
  {
    label: "Email",
    id: "emailLogin",
    placeholder: "Email",
    type: "email",
  },
  {
    label: "Password",
    id: "passwordLogin",
    placeholder: "Password",
    type: "password",
  },
];

const validateSignUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name cannot be less than two characters.")
    .required("Please provide a first name"),
  lastName: Yup.string()
    .min(2, "First name cannot be less than two characters.")
    .required("Please provide a first name"),
  email: Yup.string()
    .email("Please provide a valid email.")
    .required("Please provide a email."),
  phone: Yup.string()
    .min(10, "Phone number should of 10 digits.")
    .required("Please provide a phone number"),
  password: Yup.string()
    .min(8, "Password should of atleast of 8 characters.")
    .required("Please provide a valid password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Please confirm your password"),
});

const validateSignInSchema = Yup.object({
  emailLogin: Yup.string()
    .email("Please provide a valid email.")
    .required("Please provide a email."),
  passwordLogin: Yup.string()
    .min(8, "Password should of atleast of 8 characters.")
    .required("Please provide a valid password"),
});
export {
  signUpFieldsConfig,
  signInFieldsConfig,
  validateSignInSchema,
  validateSignUpSchema,
  defaultLoaderOptions,
  buttonLoaderOptions,
};
