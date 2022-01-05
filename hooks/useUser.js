import {useState, useEffect} from "react";

import {helpHttp} from "../helpers/helpHttp";

const url = "https://coding-challenge-api.aerolab.co/user/me";

const useUser = () => {
  const {get} = helpHttp();
  const [user, setUser] = useState(null);

  useEffect(() => {
    get(url).then((response) => {
      setUser(response);
      console.log("renderizado");
    });
  }, []);

  return {setUser, user};
};

export default useUser;
