import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";

export default function Login() {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	//componentDidMount
	useEffect(() => {
		console.log("The function useEffect executes");
	}, []);

	//componentDidUpdate
	useEffect(() => {
		console.log("Executed when email is updated");
		console.log(email);
	}, [email]);

	//componentWillUnmount
	useEffect(() => {
		return () => {
			console.log("Component unmounts");
		};
	}, []);

	return (
		<Container className="container">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card border="primary" style={{ width: '35rem', background: 'Lavender' }}  text="black">
						<Card.Body>
							<Card.Title className="center-text">Login Form</Card.Title>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setemail(e.target.value)} }/>
									<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" autoComplete="on" value={password} onChange={(e) => setpassword(e.target.value)} />
								</Form.Group>
								<Link to="/register">
									<Form.Text className="text-muted">Don't have an account?</Form.Text>
								</Link>
								<br />
								<Button variant="outline-primary" type="submit" className="button">
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
