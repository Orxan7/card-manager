import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from "react";
import logo from './logo.svg';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Logo"
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
};