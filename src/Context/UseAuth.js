import { useContext } from "react";
import { AuthContextProviderForFirebase } from "./AuthProivder";

const UseAuth = () => {
    return useContext(AuthContextProviderForFirebase);
};

export default UseAuth;