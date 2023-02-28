import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Welcome to My Healthy Advantage Admin Portal</h1>
            <Link to="/dashboard">Dashboard</Link>
        </>
    );
};
