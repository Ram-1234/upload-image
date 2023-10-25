import { createContext } from "react";

export const Context = createContext(null);
const Provider =({children})=>{
    return <Context.Provider value={{theme:"dark/light"}}>{children}</Context.Provider>
}

export default Provider;