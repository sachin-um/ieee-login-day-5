import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";

export default class LoginClass extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};
		console.log("Constructor executes");
	}

	componentDidMount() {
		console.log("Component has mounted");
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.email !== this.state.email) {
			console.log(prevState.email, this.state.email);
		}
		console.log("Component has updated");
	}

	componentWillUnmount() {
		console.log("Component has unmounted");
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<Container className="container">
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Card border="dark" bg="dark" text="white">
							<Card.Body>
								<Card.Title className="center-text">Login Form</Card.Title>
								<Form>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
										<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
									</Form.Group>
									<Link to="/register">
										<Form.Text className="text-muted">Don't have an account?</Form.Text>
									</Link>
									<br />
									<Button variant="primary" type="submit" className="button">
										Submit
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
