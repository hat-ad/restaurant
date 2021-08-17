import React from "react";
import { GoogleLogin } from "react-google-login";
import { toast } from "react-toastify";
import { googleSVG } from "../../Assets/imageDir";
import { useDispatch } from "react-redux";
import { loginThirdparty } from "../../Redux/Actions/authActions";

const client_id = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const LoginButton = () => {
  console.log(client_id);
  const dispatch = useDispatch();
  return (
    <div>
      <GoogleLogin
        clientId={client_id}
        render={(renderProps) => (
          <>
            <button
              type="button"
              className="google-signin-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div>
                <img src={googleSVG} alt="google" width={24} height={24} />
              </div>
              <span>SignIn with google</span>
            </button>
          </>
        )}
        buttonText="Login"
        onSuccess={async (e) => {
          console.log(e.tokenId);
          localStorage.setItem("tokenId", e.tokenId);
          let headersList = {
            "Content-Type": "application/json",
          };

          fetch("http://localhost:8000/thirdpartyauth", {
            method: "POST",
            body: JSON.stringify(e),
            headers: headersList,
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              dispatch(loginThirdparty(data));
            });
        }}
        onFailure={(e) => toast.error(e)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginButton;
