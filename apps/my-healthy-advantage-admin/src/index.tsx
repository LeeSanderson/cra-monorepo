import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./i18n"; // Bootstrap internationalisation
import { AuthProvider } from "./core/auth/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Dashboard } from "./Views/Dashboard/Dashboard";
import { ProtectedRoute } from "./core/auth/ProtectedRoute";
import { Login } from "./Views/Login/Login";

function protect(el: ReactElement): ReactElement {
    return <ProtectedRoute>{el}</ProtectedRoute>;
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route index element={protect(<Home />)} />
                    <Route path="home" element={protect(<Home />)} />
                    <Route path="dashboard" element={protect(<Dashboard />)} />
                    <Route path="login" element={<Login />} />
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
