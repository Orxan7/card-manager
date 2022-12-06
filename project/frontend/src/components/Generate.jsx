import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState} from "react";

export default function Generate ({ generateRequest }){

    const [ seria, setSeria] = useState('');

    const [ count, setCount] = useState('');

    const [ month, setMonth ] = useState('');

    const generate = ()=>{
        if(month && seria && count){
            for(let i=0; i<Number(count); i++){
                let value = parseInt(Math.random()*(10**16));
                generateRequest(seria, value, month);
            }
        }
    }

    return (
        <div>
        <h4 className="h4-generate">Generate new cards</h4>
        <InputGroup className="mb-3" onInput={(event)=>{setSeria(event.target.value.toString())}}>
            <InputGroup.Text id="inputGroup-sizing-default">
                Seria
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <InputGroup className="mb-3" onInput={(event)=>{setCount(event.target.value)}}>
            <InputGroup.Text id="inputGroup-sizing-default">
                Count
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <InputGroup className="mb-3" >
            <InputGroup.Text id="inputGroup-sizing-default" >
                Activity end date
            </InputGroup.Text>
            <Form.Select aria-label="Default select example" onInput={(event)=>{setMonth(event.target.value)}}>
                <option>Select</option>
                <option value="1">1 month</option>
                <option value="6">6 month</option>
                <option value="12">1 year</option>
            </Form.Select>
        </InputGroup>
            <Button variant="primary" onClick={generate}>Generate</Button>
        </div>
    );
};