import { createContext, useContext } from 'react';

const MenuContext = createContext();

// export function MenuProvider({ value, children }) {
// export function MenuProvider(props) {
//   const { models } = value;;
//   return (
//     <MenuContext.Provider value={props.value} models={props.models}>
//       {props.children}
//     </MenuContext.Provider>
//   );
// }

export function useMenu() {
  return useContext(MenuContext);
}

export default MenuContext;
