import React from "react";
//import { Button, Form, Segment } from "semantic-ui-react";
import { Form, Formik } from "formik";
import { Button, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function EmployeeCreate() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const schema = yup.object({
    firstName: yup.string().required("İsim Zorunludur!"),
    lastName: yup.string().required("Soyisim Zorunludur!"),
    email: yup.string().required("E-Posta Zorunludur!"),
    password: yup.string().required("Şifre Zorunludur!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Segment style={{ marginTop: "3em" }}>
        <Form className="ui form">
          <HrmsTextInput name="firstName" placeholder="İsim" />
          <HrmsTextInput name="lastName" placeholder="Soyisim" />
          <HrmsTextInput name="email" placeholder="E-Posta" />
          <HrmsTextInput name="password" placeholder="Şifre" type="password" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
  );
}
