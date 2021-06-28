import { Formik } from "formik";
import React from "react";
import { Form } from "formik";
import { Button, FormGroup, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function EmployerCreate() {
  const initialValues = {
    companyName: "",
    webSite: "",
    email: "",
    password: "",
    telephone: ""
  };

  const schema = yup.object({
    companyName: yup.string().required("Şirket İsmi Zorunludur!"),
    webSite: yup.string().required("Website Zorunludur!"),
    email: yup.string().required("E-Posta Zorunludur!"),
    password: yup.string().required("Şifre Zorunludur!"),
    telephone: yup.number().required("Telefon Zorunludur!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Segment style={{marginTop:"3em"}}>
        <Form className="ui form">
          <FormGroup widths="equal">
            <HrmsTextInput name="companyName" placeholder="Şirket Adı" />
            <HrmsTextInput name="webSite" placeholder="Website" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="email" placeholder="E-Posta" />
            <HrmsTextInput name="password" placeholder="Şifre" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="telephone" placeholder="Telefon" />
          </FormGroup>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
    );
}

