import React, { createContext, useContext } from 'react';

const MenuContext = createContext();

export function MenuProvider({ value, children }) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  return useContext(MenuContext);
}

export { MenuContext };
