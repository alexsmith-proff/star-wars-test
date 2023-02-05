import React, { FC, useState } from "react";
import { Context } from "./context";

interface ContextProviderProps {
    children: React.ReactNode
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [navIndexActive, setNavIndexActive] = useState<number>(0)
  const value = {
    navIndexActive, setNavIndexActive
  }
  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  );
}

export default ContextProvider;