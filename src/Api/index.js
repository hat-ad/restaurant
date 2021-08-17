import API from "./service";

// export const baseUrl = "https://social-awarness-backend.herokuapp.com/api/";
export const baseUrl = process.env.REACT_APP_BASE_URL;

// export const oAuth =
//   "https://social-awarness-backend.herokuapp.com/api/users/get-token/";

const Api = new API({
  baseUrl: baseUrl,
  //   oAuth: oAuth,
});

export default Api;
