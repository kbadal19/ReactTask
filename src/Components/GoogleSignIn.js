import React, { useContext } from "react";
import "./LoginPage.css";
import { signInGoogle } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function GoogleSignIn() {
  const navigate = useNavigate();
  const { setRole } = useContext(AuthContext);
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInGoogle();
      console.log("Sign-in successful!", result.user.emailVerified);
      if (result.user.emailVerified) {
        setRole(true);
      }
      setRole(true);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };
  return (
    <div>
      <div className="signinBox" onClick={handleGoogleSignIn}>
        <div className="googleLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_0_170)">
              <path
                d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                fill="#4285F4"
              />
              <path
                d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                fill="#34A853"
              />
              <path
                d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                fill="#FBBC05"
              />
              <path
                d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_170">
                <rect
                  width="15.3686"
                  height="15.3686"
                  fill="white"
                  transform="translate(0.0396118 0.287949)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="googleText">Sign in with Google</div>
      </div>
    </div>
  );
}
