import { Formik } from "formik";
import React from "react";
import { Form } from "formik";
import { Button, FormGroup, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function JobSeekerCreate() {
  const initialValues = {
    firstName: "",
    lastName: "",
    nationalityId: "",
    birthDate: "",
    email: "",
    password: "",
    image: "",
  };

  const schema = yup.object({
    firstName: yup.string().required("İsim Zorunludur!"),
    lastName: yup.string().required("Soyisim Zorunludur!"),
    nationalityId: yup.number().required("Tc Kimlik No Zorunludur!"),
    birthDate: yup.date().required("Doğum Yılı Zorunludur!"),
    email: yup.string().required("E-Posta Zorunludur!"),
    password: yup.string().required("Şifre Zorunludur!"),
    image: yup.string().required("Fotoğraf Zorunludur!"),
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
            <HrmsTextInput name="firstName" placeholder="İsim" />
            <HrmsTextInput name="lastName" placeholder="Soyisim" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="nationalityId" placeholder="Tc Kimlik No" />
            <HrmsTextInput name="birthDate" placeholder="Doğum Tarihi" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="email" placeholder="E_Posta" />
            <HrmsTextInput name="password" placeholder="Şifre" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="image" placeholder="Fotoğraf" />
          </FormGroup>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
  );
}
