import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Navbar fixed="bottom"  className='color-nav' variant="light">
                <Navbar.Brand>Social Media: Facebook, Instagram, Linkedin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed by ENSI Junior Entreprise
          </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Footer;