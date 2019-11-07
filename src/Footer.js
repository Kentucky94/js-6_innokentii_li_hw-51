import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <Container>
                <Row>
                    <Col xs="4">LOGO</Col>
                    <Col xs="4">Contacts</Col>
                    <Col xs="4">Links</Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;