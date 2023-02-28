import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Welcome to My Healthy Advantage</h1>
            <Link to="/perks">Perks</Link>
        </>
    );
};
