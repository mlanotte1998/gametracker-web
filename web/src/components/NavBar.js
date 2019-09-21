import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            loggedIn: this.props.loggedIn
        };
    }

    renderProfileDropdown() {
        if (this.state.loggedIn) {
            return (
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Edit Profile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
            );
        } else {
            return (
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => console.log("Whats up")} href="#!">SignUp</MDBDropdownItem>
                </MDBDropdownMenu>
            );
        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar color="orange" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">TBD</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/latest">Latest Games</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="personal">Personal List</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                {this.renderProfileDropdown()}
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}
