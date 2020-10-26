import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Jumbotron, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './header.module.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.wrapper = React.createRef();
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="header-component" ref={this.wrapper}>
                <Navbar light expand="md" className={cx('header navbar-fixed-top bg-light', styles.header)}>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            {/* <img src='../assets/images/logo192.png' height="30" width="30" alt='Alessandro Bompadre Homepage' /> */}
                            <img className="io-logo" src='/assets/images/io.jpg' height="30" alt='Alessandro Bompadre Homepage' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className={cx(styles.jumbotron)}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-3">
                                <img src="/assets/images/myself.png" alt="Alessandro Bompadre" className={cx('card-img',styles.cardImg)} />
                            </div>
                            <div className="col-9 text-justify">
                                <h1>Alessandro Bompadre</h1>
                                <p>
                                    Senior software developer several years of experience, mostly in developing software in its whole life cycle including code programming, high level design, best practices implementation, maintenance, support, refactoring processes, reverse engineering. With a natural attitude in creative and practical problem solving, adaptability, learning new systems and technologies, I am always fast, innovative and accurate in every on-going project, resulting in high level of productivity in even tight deadlines. I enjoy working in team and on my own and take on new overcoming challenges with the aim to achieve new skills and goals.. In leisure I love to engage in association or sports activities, I collaborate with a web radio and practice wing tsun.
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                 innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                 innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="remember" name="remember"
                                    innerRef={(input) => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
