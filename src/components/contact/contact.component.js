import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col  } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
                                        <Input type="text" id="firstName" name="firstName" className="bg-secondary text-muted"
                                            placeholder="Jhon" value={this.state.firstName}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="firstName" md={3}>
                                        Last Name
                                    </Label>
                                    <Col md={9}>
                                        <Input type="text" id="lastName" name="lastName" className="bg-secondary text-muted"
                                            placeholder="Doe" value={this.state.lastName}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" md={3}>
                                        Email
                                    </Label>
                                    <Col md={9}>
                                        <Input type="email" id="email" name="email" className="bg-secondary text-muted"
                                            placeholder="jhon.doe@email.me" value={this.state.email}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="phoneNumber" md={3}>
                                        Phone number
                                    </Label>
                                    <Col md={9}>
                                        <Input type="tel" id="phoneNumber" name="phoneNumber" className="bg-secondary text-muted"
                                            placeholder="+39xxxxxxxxxx" value={this.state.phoneNumber}
                                            onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:5, offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input className="bg-secondary text-muted" type="checkbox" name="agree" checked={this.state.agree}
                                                onChange={this.handleInputChange}/> { ' ' }
                                                <strong>May we contact you</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Input className="bg-secondary text-muted" type="select" name="contactType" value={this.state.contactType}
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