import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(false);

  useEffect(() => {
    console.log("skdfnvsd", role);
  }, [role]);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
