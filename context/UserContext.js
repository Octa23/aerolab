import {createContext} from "react";

import useUser from "../hooks/useUser";
const UserContext = createContext();
const UserProvider = ({children}) => {
  const {setUser, user} = useUser();
  const data = {setUser, user};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export {UserProvider};
export default UserContext;
