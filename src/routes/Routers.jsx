import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import Home from "../pages/Home/Home";
import Appointments from "../pages/Appointments/Appointments";
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
                <Route
                    path="/appointments"
                    element={<Appointments />}
                />
            </Route>
        </Routes >
    );
};

export default Routers;