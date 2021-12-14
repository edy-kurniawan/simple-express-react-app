import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarText,
} from "reactstrap";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">React Dasar</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Mahasiswa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Kelas
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>MERN</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
