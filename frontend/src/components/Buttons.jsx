import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


export default class Buttons extends Component {

    onclick = async () =>{
        fetch('http://127.0.0.1:8000/api/cards/2/', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 2,
                expiry_date: "2022-12-04T11:50:38Z",
                number: 1111111111111111200,
                release_date: "2022-12-04T11:50:34Z",
                seria: 11111111,
                status: "Not Active",
                sum: 666,
                use_date: "2022-12-04T11:50:40Z",
            })
        }
    )
    }
    render() {
        return (
            <div className="buttons">
                <Button variant="primary">Generate</Button>
                <Button onClick={this.onclick} variant="success">Submit changes</Button>
            </div>
        );
    }
};