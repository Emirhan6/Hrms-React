import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button } from 'react-bootstrap';
import { Button, Form, Segment } from "semantic-ui-react";

export default function PositionCreate() {
  return (
    <div>
      {/* <Form style={{marginTop:"3em"}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pozisyon Adı</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}

      <Segment  style={{ marginTop: "3em" }}>
        <Form >
          <Form.Group widths="equal">
            <Form.Input fluid label="Pozisyon Adı" placeholder="Pozisyon Adı" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Ekle</Button>
        </Form>
      </Segment>
    </div>
  );
}
