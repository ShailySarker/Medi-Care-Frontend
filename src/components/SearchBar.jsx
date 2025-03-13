import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
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
        </Form>
    );
};

export default SearchBar;