import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import AppointmentsList from "./Components/AppointmentsList";
import { IoDocumentTextOutline } from "react-icons/io5";
import "./Appointments.css";
const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(null);
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctorName, setDoctorName] = useState('');

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        setAppointments(storedAppointments);
    }, []);

    const handleEdit = (index) => {
        const appointment = appointments[index];
        setCurrentAppointmentIndex(index);
        setPatientName(appointment?.patientName);
        setAge(appointment?.age);
        setGender(appointment?.gender);
        setMobile(appointment?.mobile);
        setDate(appointment?.date);
        setTime(appointment?.time);
        setDoctorName(appointment?.doctorName); 
        setShowEditModal(true);
    };

    const handleMobileInput = (input) => {
        const sanitizedInput = input.replace(/[^\d]/g, '');
        const countryCode = '+91';
        const userInput = sanitizedInput.slice(2, 12);
        setMobile(`${countryCode}${userInput}`);
    };

    const handleUpdateAppointment = () => {
        if (patientName?.length < 3) {
            alert("Patient name should have at least 3 characters!");
            return;
        }
        if (patientName?.length > 15) {
            alert("Patient name should have a maximum of 15 characters!");
            return;
        }
        if (mobile?.length !== 13) {
            alert("Mobile number must be 10 digits!");
            return;
        }

        if (!patientName || !age || !gender || !mobile || !date || !time || !doctorName) {
            alert("All fields are required!");
            return;
        }

        const updatedAppointment = {
            patientName,
            age,
            gender,
            mobile,
            date,
            time,
            doctorName
        };

        const updatedAppointments = [...appointments];
        updatedAppointments[currentAppointmentIndex] = updatedAppointment;

        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        setAppointments(updatedAppointments);
        alert("Appointment updated successfully!");
        setShowEditModal(false);
    };

    const handleCancel = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);

        // Update local storage after deleting the appointment
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

        // Update the state
        setAppointments(updatedAppointments);
        alert("Appointment is canceled!!");
    };

    return (
        <Container>
            <h3 className="my-4">Appointments List</h3>
            <div>
                {
                    appointments?.length > 0 ?
                        <AppointmentsList
                            appointments={appointments}
                            onEdit={handleEdit}
                            onCancel={handleCancel}
                        /> :
                        <div className="fw-bolder d-flex flex-row justify-content-center align-items-center py-5 my-5 gap-2 gap-md-3">
                            <IoDocumentTextOutline className="display-5" />
                            <p className="h3">No appointments booked yet !</p>
                        </div>
                }
            </div>
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} className="custom-modal model-lg d-flex flex-row justify-content-center align-items-center">
                <Modal.Header>
                    <Modal.Title>Edit Appointment Info with <span className="text-primary">{doctorName}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="patientName">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={patientName}
                                onChange={(e) => {
                                    const inputValue = e?.target?.value;
                                    if (/^[A-Za-z\s]*$/.test(inputValue)) {
                                        setPatientName(inputValue);
                                    }
                                }}
                                placeholder="Enter patient name"
                                className="text-secondary mb-3"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => {
                                    const inputValue = e?.target?.value;
                                    if (/^(?:[1-9][0-9]?|100)?$/.test(inputValue) || inputValue === "") {
                                        setAge(inputValue);
                                    }
                                }}
                                placeholder="Enter patient age"
                                className="text-secondary mb-3"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                value={gender}
                                onChange={(e) => setGender(e?.target?.value)}
                                className="text-secondary mb-3"
                                required
                            >
                                <option value="">Select patient gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="mobile">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={mobile}
                                onChange={(e) => handleMobileInput(e?.target?.value)}
                                maxLength={13}
                                className="text-secondary mb-3"
                                required
                                placeholder="Enter mobile number"
                            />
                        </Form.Group>

                        <Form.Group controlId="date">
                            <Form.Label>Preferred Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                                onChange={(e) => setDate(e?.target?.value)}
                                className="text-secondary mb-3"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="time">
                            <Form.Label>Preferred Time Slot</Form.Label>
                            <Form.Control
                                as="select"
                                value={time}
                                onChange={(e) => setTime(e?.target?.value)}
                                className="text-secondary"
                                required
                            >
                                <option value="">Select time</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                                <option value="06:00 PM">06:00 PM</option>
                                <option value="08:00 PM">08:00 PM</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="fw-semibold" onClick={() => setShowEditModal(false)}>Close</Button>
                    <Button variant="primary" className="fw-semibold" onClick={handleUpdateAppointment}>Update Appointment</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Appointments;