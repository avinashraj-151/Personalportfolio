import { createContext, useState, useRef } from "react";

//create contextapi
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [indexsidebar, setindexsidebar] = useState(0);
  const ContextValue = {
    indexsidebar,
    setindexsidebar,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
