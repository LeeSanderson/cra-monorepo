import { useContext } from "react";
import { AuthContext, AuthContextType } from "../auth/AuthProvider";

export const useAuth = () => {
    return useContext<AuthContextType>(AuthContext);
};
