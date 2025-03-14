import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from "react";
import DoctorCard from './Components/DoctorCard';
import { TfiFaceSad } from 'react-icons/tfi';
import AppointmentForm from './Components/AppointmentForm';

const Home = () => {
    const [doctors, setDoctors] = useState([
        { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", experience: 10, location: "New York" },
        { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", experience: 8, location: "Los Angeles" },
        { id: 3, name: "Dr. Mike Johnson", specialty: "Neurologist", experience: 12, location: "Chicago" },
        { id: 4, name: "Dr. Emily Davis", specialty: "Pediatrician", experience: 7, location: "Houston" },
        { id: 5, name: "Dr. David Brown", specialty: "Orthopedic Surgeon", experience: 15, location: "San Francisco" },
        { id: 6, name: "Dr. Sarah Wilson", specialty: "Oncologist", experience: 9, location: "Boston" },
        { id: 7, name: "Dr. James Martinez", specialty: "Dermatologist", experience: 11, location: "Miami" },
        { id: 8, name: "Dr. Olivia Taylor", specialty: "Gynecologist", experience: 8, location: "Seattle" },
        { id: 9, name: "Dr. William Anderson", specialty: "Cardiologist", experience: 13, location: "Dallas" },
        { id: 10, name: "Dr. Sophia Thomas", specialty: "Psychiatrist", experience: 10, location: "Philadelphia" },
        { id: 11, name: "Dr. Daniel White", specialty: "Dentist", experience: 6, location: "Denver" },
        { id: 12, name: "Dr. Chloe Harris", specialty: "General Surgeon", experience: 14, location: "Phoenix" },
        { id: 13, name: "Dr. Liam Scott", specialty: "Radiologist", experience: 10, location: "Atlanta" },
        { id: 14, name: "Dr. Ava Clark", specialty: "Endocrinologist", experience: 8, location: "San Diego" },
        { id: 15, name: "Dr. Noah Lewis", specialty: "Anesthesiologist", experience: 11, location: "Las Vegas" },
        { id: 16, name: "Dr. Mia Robinson", specialty: "Ophthalmologist", experience: 7, location: "Austin" },
        { id: 17, name: "Dr. Elijah King", specialty: "Nephrologist", experience: 13, location: "Portland" },
        { id: 18, name: "Dr. Harper Walker", specialty: "Cardiologist", experience: 12, location: "Washington D.C." },
        { id: 19, name: "Dr. Lucas Perez", specialty: "Dermatologist", experience: 9, location: "Nashville" },
        { id: 20, name: "Dr. Amelia Young", specialty: "Cardiologist", experience: 14, location: "San Antonio" }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [filteredDoctors, setFilteredDoctors] = useState(doctors); // State for filtered doctors

    const handleSearch = (query) => {
        // Mock search functionality
        const filteredDoctors = doctors.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(query.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(query.toLowerCase())
        );
        setDoctors(filteredDoctors);
    };
    const handleReset = () => {
        window.location.reload();
        // setFilteredDoctors(doctors); // Reset to show all doctors
    };

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowForm(true);
    };

    const handleSubmitAppointment = (appointment) => {
        // Fetch existing data from local storage
        const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // Add the new appointment to the array
        const updatedAppointments = [...existingAppointments, appointment];

        // Save updated array back to local storage
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

        alert("Appointment is booked successfully!!");
        console.log("Appointment booked:", updatedAppointments);
    };


    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <SearchBar onSearch={handleSearch} onReset={handleReset} />
                </Col>
            </Row>
            <Row>
                {
                    doctors?.length > 0 ?
                        <>
                            {
                                doctors?.map((doctor) => (
                                    <Col key={doctor?.id} xl={3} lg={4} md={6} className='mb-md-4 mb-3'>
                                        <DoctorCard doctor={doctor} onBookAppointment={handleBookAppointment} />
                                    </Col>
                                ))}
                        </> :
                        <div className="fw-bolder d-flex flex-row justify-content-center align-items-center py-5 my-5 gap-2 gap-md-3">
                            <TfiFaceSad className="display-5" />
                            <p className="h3">Sorry, no data found!</p>
                        </div>
                }
            </Row>
            <AppointmentForm
                show={showForm}
                onHide={() => {
                    setShowForm(false);
                    window.location.reload();
                }}
                doctor={selectedDoctor}
                onSubmit={handleSubmitAppointment}
            />
        </Container>
    );
};

export default Home;