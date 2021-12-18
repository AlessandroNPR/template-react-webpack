import React, {Fragment, useState} from "react";
import '../assets/css/header.css'
import {Container, Col, Row} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faBars, faTimes, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';
const Header = ({isOpen, onChangeMenu, width}) => {
    return <div className="header">
        <Container>
            <Row>
                <Col lg={3} xs={1} sm={1} style={{textAlign: 'left', paddingTop: '2rem'}}>
                    {isOpen && <FontAwesomeIcon size="2x" onClick={() => onChangeMenu(!isOpen)} color="black" icon={faTimes} />}
                    {!isOpen && <FontAwesomeIcon size="2x" onClick={() => onChangeMenu(!isOpen)} color="black" icon={faBars} />}
                </Col>
                <Col lg={6} xs={8} sm={8} style={{textAlign: width > 700 ? 'center' : 'left'}}>
                </Col>
                <Col lg={3} xs={3} sm={3} style={{textAlign: 'right', paddingTop: '2rem'}}>
                    <UncontrolledButtonDropdown>
                        <DropdownToggle color="link" className="p-0">
                            <FontAwesomeIcon size="2x" icon={faUserCircle} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <div style={{padding: '1rem'}}>
                                <FontAwesomeIcon size="1x" icon={faSignOutAlt} /> Esci
                            </div>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </Col>
            </Row>
        </Container>
    </div>
}
export default Header