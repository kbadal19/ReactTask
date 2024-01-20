import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLocal, setIsLocal] = useState(false);

  return (
    <UserContext.Provider value={{ isLocal, setIsLocal }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
