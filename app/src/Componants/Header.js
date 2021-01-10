import React from 'react'
import image from '../eje.png'
import { Container, Row, Col, Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';
function Header() {
    return (
        <div>
        <Navbar className='color-nav' variant="light" sticky="top">
               <img
                    src={image}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Col xs={6} md={11} lg={11}>
                <Nav className="mr-auto">
                </Nav>
                <Form inline style={{float:'right'}} >
                    <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                </Form>
                </Col>
                
            </Navbar>
            
            
        </div>
    )
}

export default Header