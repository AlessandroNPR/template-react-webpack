import React, {Fragment, useState} from "react";
import '../assets/css/header.css'
import {Container, Col, Row} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
const Header = ({isOpen, onChangeMenu}) => {

    return <div className="header">
        <Container>
            <Row>
                <Col style={{textAlign: 'left'}}>
                    {isOpen && <FontAwesomeIcon size="2x" onClick={() => onChangeMenu(!isOpen)} color="white" icon={faTimes} />}
                    {!isOpen && <FontAwesomeIcon size="2x" onClick={() => onChangeMenu(!isOpen)} color="white" icon={faBars} />}
                </Col>
                <Col style={{textAlign: 'center'}}>

                </Col>
                <Col style={{textAlign: 'right'}}>
                    <FontAwesomeIcon size="2x" color="white" icon={faUserCircle} />
                </Col>
            </Row>
        </Container>
    </div>
}
export default Header