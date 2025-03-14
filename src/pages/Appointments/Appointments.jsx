import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AppointmentsList from "./Components/AppointmentsList";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments);
    }, []);

    const handleEdit = (index) => {
        // Implement edit functionality
        console.log("Edit appointment:", appointments[index]);
    };

    const handleCancel = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
    
        // Update local storage after deleting the appointment
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        
        alert("Appointment is canceled!!");
        // Update the state
        setAppointments(updatedAppointments);
    };
    
    return (
        <Container>
            <h1 className="my-4">Appointments</h1>
            <AppointmentsList
                appointments={appointments}
                onEdit={handleEdit}
                onCancel={handleCancel}
            />
        </Container>
    );
};

export default Appointments;