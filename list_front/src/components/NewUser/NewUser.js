import React from "react";
import App from '../App/App'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function NewUser() {
    return (
        <div>
            <h1 className="m-3">New User</h1>

            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
export default NewUser