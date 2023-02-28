import { createContext, PropsWithChildren, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type AuthLoginFunction = (
    userName: string,
    password: string
) => Promise<boolean>;
export type AuthLogoutFunction = () => Promise<void>;

export type AuthContextType = {
    isAuthenticated: boolean;
    token: string;
    onLogin: AuthLoginFunction;
    onLogout: AuthLogoutFunction;
};

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    token: "",
    onLogin: () => {
        throw Error(
            "AuthContext not initialised. Make sure component is wrapped in <AuthProvider/>"
        );
    },
    onLogout: () => {
        throw Error(
            "AuthContext not initialised. Make sure component is wrapped in <AuthProvider/>"
        );
    },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const fakeAuth = async () =>
        new Promise<string>((resolve) => {
            setTimeout(() => resolve("2342f2f1d131rf12"), 250);
        });

    const handleLogin = async (userName: string, password: string) => {
        const token = await fakeAuth();

        if (userName.endsWith("@example.com") && password === "Password1!") {
            setToken(token);
            setIsAuthenticated(true);
            const path = location.state?.from?.pathname || "/";
            navigate(path);
            return true;
        }

        // Else fake login failure
        setToken(null);
        setIsAuthenticated(false);
        return false;
    };

    const handleLogout = async () => {
        setToken(null);
        setIsAuthenticated(false);
    };

    const authProps: AuthContextType = {
        isAuthenticated: isAuthenticated,
        token: token || "",
        onLogin: handleLogin,
        onLogout: handleLogout,
    };
    return (
        <AuthContext.Provider value={authProps}>
            {children}
        </AuthContext.Provider>
    );
};
