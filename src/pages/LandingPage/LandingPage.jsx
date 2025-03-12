import React, { useEffect } from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi';
import { PiStethoscopeDuotone } from 'react-icons/pi';
import "./LandingPage.css";
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="fw-bolder d-flex flex-row justify-content-center align-items-center text-primary vh-100 vw-100 gap-2 gap-md-3 pulse">
            <GiStethoscope className="display-4" />
            <p className="h1">Medi Care</p>
        </div>
    );
};

export default LandingPage;