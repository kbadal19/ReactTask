import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { AuthContext } from "../Context/AuthContext";

export default function Logincard() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const { role, setRole } = useContext(AuthContext);
  const loginHandler = (e) => {
    try {
      e.preventDefault();
      if (userName == "K.BADAL19@GMAIL.COM" && password == "1234") {
        setRole(true);
      }
      setRole(true);
      console.log("userName", userName, password);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    console.log("islogon", role);
  }, [role]);
  return (
    <div className="login-card">
      <form>
        <div className="form-group">
          <div className="cardGroup"></div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button className="signinbtn" type="submit" onClick={(e) => loginHandler(e)}>
          Sign In
        </button>
      </form>
    </div>
  );
}
