import React from "react";
import { Table, Button } from "react-bootstrap";

const AppointmentsList = ({ appointments, onEdit, onCancel }) => {
    return (
        <Table striped bordered hover responsive className="mb-5">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {appointments?.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment?.patientName}</td>
                        <td>{appointment?.doctorName}</td>
                        <td>{appointment?.date}</td>
                        <td>{appointment?.time}</td>
                        <td>
                            <Button variant="warning" className="fw-semibold " onClick={() => onEdit(index)}>
                                Edit
                            </Button>{" "}
                            <Button variant="danger" className="fw-semibold " onClick={() => onCancel(index)}>
                                Cancel
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AppointmentsList;