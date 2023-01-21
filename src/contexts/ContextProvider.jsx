import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initiaState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
