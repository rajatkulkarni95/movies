import { createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export { Context, Provider };
