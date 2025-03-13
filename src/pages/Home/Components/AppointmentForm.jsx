import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./AppointmentForm.css";
const AppointmentForm = ({ show, onHide, doctor, onSubmit }) => {
    const [patientName, setPatientName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleMobileInput = (input) => {
        // Remove any non-digit characters (except +)
        const sanitizedInput = input.replace(/[^\d]/g, '');

        // Fixed country code
        const countryCode = '+91';

        // Allow only 10 digits after +91
        const userInput = sanitizedInput.slice(2, 12);

        // Set the value with fixed +91
        setMobile(`${countryCode}${userInput}`);
    };

    const handleSubmit = () => {
        // validation
        if (patientName?.length < 3) {
            alert("Patient name should have at least 3 characters !");
            return;
        }
        if (patientName?.length > 15) {
            alert("Patient name should have a maximum of 15 characters !");
            return;
        }
        if (mobile?.length !== 13) {
            alert("Mobile number must be 10 digit !");
            return;
        }
        // if (mobile?.length !== 12) {
        //     alert("Mobile number must be 10 digit !");
        //     return;
        // }


        if (patientName && age && gender && mobile && date && time && doctor?.name) {

            const appointment = {
                patientName,
                age,
                gender,
                mobile,
                date,
                time,
                doctorName: doctor?.name,
            };

            onSubmit(appointment);
            onHide();
            window.location.reload();
        } else {
            alert("Kindly fill up the form correctly!")
        }
    };

    return (
        <Modal show={show} onHide={onHide} className="custom-modal model-lg d-flex flex-row justify-content-center align-items-center">
            <Modal.Header>
                <Modal.Title className="text-center">Book Appointment with <span className="text-primary">{doctor?.name}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
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
                            className="text-secondary mb-xl-3 mb-lg-0 mb-md-3 mb-2"
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            value={age}
                            onChange={(e) => {
                                const inputValue = e?.target?.value;

                                // Allow only numbers with max two digits and greater than 0
                                if (/^(?:[1-9][0-9]?|100)?$/.test(inputValue) || inputValue === "") {
                                    setAge(inputValue);
                                }
                            }}
                            placeholder="Enter patient age"
                            className="text-secondary mb-xl-3 mb-lg-0 mb-md-3 mb-2"
                        />
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            as="select"
                            value={gender}
                            onChange={(e) => setGender(e?.target?.value)}
                            className="text-secondary mb-xl-3 mb-lg-0 mb-md-3 mb-2"
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
                            maxLength={13} // +91 + 10 digits = 13 characters
                            className="text-secondary mb-xl-3 mb-lg-0 mb-md-3 mb-2"
                            placeholder="Enter mobile number"
                        />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Preferred Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow's date
                            onChange={(e) => setDate(e?.target?.value)}
                            className="text-secondary mb-xl-3 mb-lg-0 mb-md-3 mb-2"
                        />
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label>Preferred Time Slot</Form.Label>
                        <Form.Control
                            as="select"
                            value={time}
                            onChange={(e) => setTime(e?.target?.value)}
                            className="text-secondary"
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
                <Button className="fw-semibold" variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button className="fw-semibold" variant="primary" onClick={handleSubmit}>
                    Book Appointment
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AppointmentForm;