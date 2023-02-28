import { PropsWithChildren, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import { useAuth } from "@shared/hooks/useAuth";

export const ProtectedRoute = ({
    children,
}: PropsWithChildren): ReactElement => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    if (!isAuthenticated) {
        return (
            <Navigate to="/login" replace={true} state={{ from: location }} />
        );
    }
    return <>{children}</>;
};
