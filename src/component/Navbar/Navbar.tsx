import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../icon/logo.webp";
import React from "react";
import {Button} from "react-bootstrap";

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"> <img
                    alt=""
                    src={Logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-content-center"
                />{' '}
                    Нотариус Зверева Людмила Ивановна</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/contact">Контакты</Nav.Link>
                        <NavDropdown title="Еще" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tariff">Тарифы</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/notarial_acts">
                                Нотариальные действия
                            </NavDropdown.Item>

                        </NavDropdown>
                        <Button href='tel:+79184241778' variant="outline-primary">Позвонить</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;