import React, { Component } from 'react';
import { Row, Button, Label, Col, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './comment.module.scss';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishID, values.rating, values.author, values.comment);
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-pencil fa-lg"> Submit comment</span>
                        </Button>
                    </div>
                    <div className="col-12 col-md-9">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            Submit comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Col className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" id="rating" name="rating"
                                            placeholder="Rating"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                            >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".rating"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must at least be three characters long.',
                                                maxLength: 'Must be less than or equal to 15 characters'
                                            }}
                                            />
                                    </Col>
                                </Col>
                                <Col className="form-group">
                                    <Label htmlFor="author" md={2}>Your name</Label>
                                    <Col md={10}>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                                />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must at least be three characters long.',
                                                maxLength: 'Must be 20 characters or less'
                                            }}
                                            />
                                    </Col>
                                </Col>
                                <Col className="form-group">
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea rows={6} model=".comment" id="comment" name="comment"
                                            placeholder="Comment"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                                />
                                        <Errors
                                            className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                            />
                                    </Col>
                                </Col>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 1}}>
                                        <Button type="submit" color="primary">
                                        Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    </div>
                </div>
            </div>
        )
    };
}

export default Comment;