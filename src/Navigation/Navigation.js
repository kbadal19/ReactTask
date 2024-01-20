import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Dashboard from "../Components/Dashboard";
import LoginPage from "../Components/LoginPage";
import { UserContext } from "../Context/UserContext";

export default function Navigation() {
  const { role } = useContext(AuthContext);
  const { isLocal, setIsLocal } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role) {
      navigate("/dashboard");
    } else {
      navigate("/");
      setIsLocal(false);
      localStorage.removeItem("name1");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.removeItem("insta");
      localStorage.removeItem("youtube");
    }
  }, [role]);

  return (
    <Routes>
      {!role ? (
        <Route path="/" element={<LoginPage />} />
      ) : (
        <Route path="/dashboard" element={<Dashboard />} />
      )}
    </Routes>
  );
}
