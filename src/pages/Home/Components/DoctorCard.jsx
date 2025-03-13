import React from "react";
import { Card, Button } from "react-bootstrap";

const DoctorCard = ({ doctor, onBookAppointment }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{doctor?.name}</Card.Title>
                <Card.Text>
                    <strong>Specialty:</strong> {doctor?.specialty}<br />
                    <strong>Experience:</strong> {doctor?.experience} years<br />
                    <strong>Location:</strong> {doctor?.location}
                </Card.Text>
                <Button variant="primary" onClick={() => onBookAppointment(doctor)}>
                    Book Appointment
                </Button>
            </Card.Body>
        </Card>
    );
};

export default DoctorCard;