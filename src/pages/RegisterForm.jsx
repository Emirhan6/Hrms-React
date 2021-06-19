import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function RegisterForm() {
  return (
    <div>
      <Segment inverted style={{ marginTop: "3em" }}>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input fluid label="İsim" placeholder="İsim" />
            <Form.Input fluid label="Soyisim" placeholder="Soyisim" />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input fluid label="E-Posta" placeholder="E-Posta" type="email" />
            <Form.Input
              fluid
              label="Telefon Numarası"
              placeholder="Telefon Numarası"
            />
          </Form.Group>
 
          <Form.Group widths="equal">
            <Form.Input fluid label="Şifre" placeholder="Şifre" type="password" />
          </Form.Group>

          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </div>
  );
}
