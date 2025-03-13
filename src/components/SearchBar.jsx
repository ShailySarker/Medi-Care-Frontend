import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onSearch, onReset }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleReset = () => {
        setQuery(""); // Clear the search query
        onReset(); // Reset the data to show all doctors
    };


    return (
        <Form onSubmit={handleSubmit} className="d-flex gap-2">
            <FormControl
                type="text"
                placeholder="Search by doctor's name or specialty"
                value={query}
                onChange={(e) => setQuery(e?.target?.value)}
                className=""
            />
            <Button type="submit" variant="outline-primary hover:primary fw-semibold">
                Search
            </Button>
            <Button
                type="button"
                variant="outline-secondary hover:secondary fw-semibold"
                onClick={handleReset}
            >
                Reset
            </Button>
        </Form>
    );
};

export default SearchBar;