import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n"; // Bootstrap internationalisation
import reportWebVitals from "./reportWebVitals";
import { Login } from "./Views/Login/Login";
import { AuthProvider } from "./core/auth/AuthProvider";
import { Home } from "./Views/Home/Home";
import { ProtectedRoute } from "./core/auth/ProtectedRoute";
import { Perks } from "./Views/Perks/Perks";
import HealthAssuredLogo from "@shared/assets/HealthAssuredLogo.jpg";

function protect(el: ReactElement): ReactElement {
    return <ProtectedRoute>{el}</ProtectedRoute>;
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="header h-20 w-full fixed z-OVERLAY">
            <img
                alt="Health Assured Logo"
                src={HealthAssuredLogo}
                className="fixed z-OVERLAY max-h-20 bg-center"
            />
        </div>
        <div className="mt-20 absolute w-full pt-4">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route index element={protect(<Home />)} />
                        <Route path="home" element={protect(<Home />)} />
                        <Route path="perks" element={protect(<Perks />)} />
                        <Route path="login" element={<Login />} />
                        {/* <Route path="*" element={<NoMatch />} /> */}
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
