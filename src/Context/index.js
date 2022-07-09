import React, {useContext, useState } from "react";

const utilityContext = React.createContext({});

export const useUtility = () => {
  return useContext(utilityContext);
};

const UtiltiyProvider = ({ children }) => {
  const [loader, setLoader] = useState({ status: Boolean(false), message: null });

  ///////////////////////////////////////////////////////
  const loadingHandler = ({ status, message }) => {
    setLoader((prev) => {
      return { status, message };
    });
  };

  const value = {
    loader,
    loadingHandler,
  };
  return <utilityContext.Provider value={value}>{children}</utilityContext.Provider>;
};
export default UtiltiyProvider;
