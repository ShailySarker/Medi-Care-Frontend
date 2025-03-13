import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import Home from "../pages/Home/Home";
import MainLayouts from "../layouts/MainLayouts";

const Routers = () => {
    return (
        <Routes>
            <Route
                index
                path="/"
                element={<LandingPage />}
            />
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                    path="/home"
                    element={<Home />}
                />
            </Route>
        </Routes >
    );
};

export default Routers;