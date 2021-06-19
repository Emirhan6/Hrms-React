import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function EmployerCreate() {
  return (
    <div>
      <Segment style={{ marginTop: "3em" }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Şirket Adı" placeholder="Şirket Adı" />
            <Form.Input fluid label="Website" placeholder="Website" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="E-Posta"
              placeholder="E-Posta"
              type="email"
            />
            <Form.Input
              fluid
              label="Şifre"
              placeholder="Şifre"
              type="password"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Telefon Numarası" placeholder="Telefon Numarası" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Ekle</Button>
        </Form>
      </Segment>
    </div>
  );
}
