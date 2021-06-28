import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Form, Segment } from "semantic-ui-react";
import { Form, Formik } from "formik";
import { Button, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function PositionCreate() {
  const initialValues = { positionName: "" };

  const schema = yup.object({
    positionName: yup.string().required("Pozisyon Adı Zorunludur!"),
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
          <HrmsTextInput name="positionName" placeholder="Pozisyon Adı" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
  );
}
