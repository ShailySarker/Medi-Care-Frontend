import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from "react";

const Home = () => {
    const [doctors, setDoctors] = useState([
        { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", experience: 10, location: "New York" },
        { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", experience: 8, location: "Los Angeles" },
    ]);

    const handleSearch = (query) => {
        // Mock search functionality
        const filteredDoctors = doctors.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(query.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(query.toLowerCase())
        );
        setDoctors(filteredDoctors);
    };
    
    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <SearchBar onSearch={handleSearch} />
                </Col>
            </Row>
            <Row>
                {doctors?.map((doctor) => (
                    <Col key={doctor?.id} md={4}>
                    {/* <DoctorCard doctor={doctor} onBookAppointment={handleBookAppointment} /> */}
                    </Col>
                ))}
            </Row>
       </Container> 
    );
};

export default Home;