import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import './contact.scss';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            agree: false,
            contactType: 'Tel',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNumber: false,
                email: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validateFirstName(firstName) {
        if (this.state.touched.firstName && firstName.length < 3) {
            return 'First Name should be >= 3 characters';
        }
        if (this.state.touched.firstName && firstName.length > 20) {
            return 'First Name should be <= 20 characters';
        }
        return '';
    }

    validateLastName(lastName) {
        if (this.state.touched.lastName && lastName.length < 3) {
            return 'Last Name should be >= 3 characters';
        }
        else if (this.state.touched.lastName && lastName.length > 30) {
            return 'Last Name should be <= 30 characters';
        }
        return '';
    }

    validatePhoneNumber(phoneNumber) {
        // eslint-disable-next-line no-useless-escape
        const reg = /^[+][0-9]{1,4}[\./0-9]{3,8}/;
        if (this.state.touched.phoneNumber && !reg.test(phoneNumber)) {
            return 'Tel. Number should mantain the form: +390000000000';
        }
        return '';
    }

    validateEmail(email) {
        // eslint-disable-next-line no-useless-escape
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
        if (this.state.touched.email && !reg.test(email)) {
            return 'Email format is not valid';
        }
        return '';
    }

    validate(firstName, lastName, phoneNumber, email) {
        const errors = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            agree: '',
            contactType: '',
            message: ''
        };

        errors.firstName = this.validateFirstName(firstName);
        errors.lastName = this.validateLastName(lastName);
        errors.phoneNumber = this.validatePhoneNumber(phoneNumber);
        errors.email = this.validateEmail(email);
        return errors;
    }

    handleInputChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        console.log("current state is:" + JSON.stringify(this.state));
        alert("current state is:" + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.email)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="tel:+85212345678"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>
                                Send us your feedback
                            </h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="firstName" md={3}>
                                        First Name
                                    </Label>
                                    <Col md={9}>
                                        <Input 
                                            type="text" 
                                            id="firstName" 
                                            name="firstName" 
                                            className="bg-secondary text-muted"
                                            placeholder="Jhon" 
                                            value={this.state.firstName}
                                            valid={errors.firstName === ''}
                                            invalid={errors.firstName !== ''}
                                            onBlur={this.handleBlur('firstName')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="firstName" md={3}>
                                        Last Name
                                    </Label>
                                    <Col md={9}>
                                        <Input
                                            type="text" 
                                            id="lastName" 
                                            name="lastName" 
                                            className="bg-secondary text-muted"
                                            placeholder="Doe" 
                                            value={this.state.lastName}
                                            valid={errors.lastName === ''}
                                            invalid={errors.lastName !== ''}
                                            onBlur={this.handleBlur('lastName')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" md={3}>
                                        Email
                                    </Label>
                                    <Col md={9}>
                                        <Input
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className="bg-secondary text-muted"
                                            placeholder="jhon.doe@email.me" 
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="phoneNumber" md={3}>
                                        Phone number
                                    </Label>
                                    <Col md={9}>
                                        <Input 
                                            type="tel" 
                                            id="phoneNumber" 
                                            name="phoneNumber" 
                                            className="bg-secondary text-muted"
                                            placeholder="+39xxxxxxxxxx" 
                                            value={this.state.phoneNumber}
                                            valid={errors.phoneNumber === ''}
                                            invalid={errors.phoneNumber !== ''}
                                            onBlur={this.handleBlur('phoneNumber')}
                                            onChange={this.handleInputChange}/>
                                            <FormFeedback>{errors.phoneNumber}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:5, offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input 
                                                    className="bg-secondary text-muted" 
                                                    type="checkbox" 
                                                    name="agree" 
                                                    checked={this.state.agree}
                                                    valid={errors.agree === ''}
                                                    invalid={errors.agree !== ''}
                                                    onBlur={this.handleBlur('agree')}
                                                    onChange={this.handleInputChange}/> { ' ' }
                                                <strong>May we contact you</strong>
                                                <FormFeedback>{errors.agree}</FormFeedback>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Input 
                                        className="bg-secondary text-muted" 
                                            type="select" 
                                            name="contactType" 
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="message" md={3}>
                                        Your feedback
                                    </Label>
                                    <Col md={9}>
                                        <Input type="textarea" id="message" name="message" className="bg-secondary text-muted"
                                            onChange={this.handleInputChange} placeholder="Put your text here" value={this.state.message}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset:2}}>
                                        <Button className="pull-right" type="submit" color="primary">
                                            Send feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Contact;