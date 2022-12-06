import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Search(){
    return (
        <div className="search-generate">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Search
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    )
}