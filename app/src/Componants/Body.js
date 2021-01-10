import React, { useState, render } from 'react'
import { x } from './Members'
import { Button, ButtonGroup, ListGroup, ListGroupItem, Badge, Container, Row, Col, Tooltip, OverlayTrigger, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function Body() {
    const [data, setdata] = useState(x);
    const [state, setstate] = useState(0);
    const [personne, setpersonne] = useState();
    const [tous, settous] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [start, setstart] = useState(false);




    const main = (etat) => {

        if (state == 8) {
            setfiltred((prev) => [{ name: personne, etat }, ...prev])
            setpersonne(data[state - 1].prenom + " " + data[state - 1].nom);
            settous((prev) => [{ name: personne, etat }, ...prev]);
            document.getElementById('tohide').style.display = "none";

        }
        else {
            if (etat == "go") {
                setstate(state + 1);
                setpersonne(data[state].prenom + " " + data[state].nom);

            } else {
                setfiltred((prev) => [{ name: personne, etat }, ...prev])
                setstate(state + 1);
                setpersonne(data[state].prenom + " " + data[state].nom);
                settous((prev) => [{ name: personne, etat }, ...prev])

            }
        }

    }



    const filtre = (etat) => {
        if (etat == "Tous") {
            setfiltred(tous)
        } else {

            const result = tous.filter(element => element.etat == etat);

            setfiltred(result);
        }


    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Cliquez pour commencer l'appel
        </Tooltip>
    );

    function giveVariant(etat) {
        var res = "";
        if (etat == "Present")
            res = "success"
        else {
            if (etat == "Absent")
                res = "danger"
            else
                res = "warning"
        }
        return res;

    }
   

    return (
        <div id="presence" style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%', marginButtom: '10%' }}>
            <div id='tohide' style={{ margin: '20px' }}>
                <Container>
                    <Row className="justify-content-center" xs={1} md={2} lg={4}>
                        <Col >
                            <div id="names" >
                                {start ? null :
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}>
                                        <Button onClick={() => {
                                            setstart(!start);
                                            setpersonne(data[state].prenom + " " + data[state].nom);
                                            main("go");
                                        }} variant='start'><h4 style={{ fontSize: '40px', color: '#e0ded2' }} >Commencer</h4>
                                        </Button>
                                    </OverlayTrigger>
                                }
                                <h3 id="showname" style={{ fontSize: '40px', color: '#e0ded2' }}> {personne}  </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" id="buttons" xs={1} md={2} lg={6} >

                        <Col  >
                            <button type="button" disabled={!start} onClick={() => main("Present")} className="btn btn-success">Present</button>
                        </Col>
                        <Col >
                            <button type="button" disabled={!start} onClick={() => main("Excusé")} className="btn btn-warning">Excusé</button>
                        </Col>
                        <Col >
                            <button type="button" disabled={!start} onClick={() => main("Absent")} className="btn btn-danger">Absent</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container id='results1'>
                <Row className="justify-content-center">
                    <ButtonGroup aria-label="Basic example" size="lg"  >
                        <Button variant='light' onClick={() => filtre("Tous")}>Tous</Button>
                        <Button variant="light" onClick={() => filtre("Absent")}>Absent</Button>
                        <Button variant="light" onClick={() => filtre("Present")} >Present</Button>
                    </ButtonGroup>
                </Row>

            </Container>

            <div>
                <Container>
                    <ListGroup>
                        {filtred && filtred.map((element, state) =>
                            <div key={state} id='results2'>
                                <div id="row">

                                    <Row>
                                        <Col xs={24} md={12} lg={24}>
                                            <ListGroupItem style={{ backgroundColor: '#e0ded2' }}>
                                                <Row>
                                                    <Col><h5 style={{ textAlign: 'left', color: '#292F36' }}>{element.name}</h5> </Col>
                                                    <Col xs={6}>
                                                        <Badge style={{ float: 'left' }} pill variant={giveVariant(element.etat)} >{element.etat}</Badge>
                                                    </Col>
                                                    <Col ><Dropdown style={{ span: 4, float: 'right' }}>
                                                        <Dropdown.Toggle pill variant="outline-dark" id="dropdown-basic" size="sm">
                                                            Edit
                                                         </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => element.etat="Present"}>Present</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => element.etat="Absent"}>Absent</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => element.etat="Excusé"}>Excusé</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </Col>

                                                </Row>
                                            </ListGroupItem>

                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        )}

                    </ListGroup>
                </Container>
            </div>
        </div>
    )
}


export default Body
