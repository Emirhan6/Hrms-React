import { Formik } from "formik";
import React from "react";
import { Form } from "formik";
import { Button, FormGroup, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function CvCreate() {
  const initialValues = {
    userId: "",
    image: "",
    startYear: "",
    graduationYear: "",
    oldPosition: "",
    oldWorkplaceName: "",
    experienceDateStart: "",
    experienceDateFinish: "",
    foreignLanguages: "",
    languageLevel: "",
    githubAccount: "",
    linkedinAccount: "",
    programmingLanguages: "",
    descriptions: "",
  };

  const schema = yup.object({
    userId: yup.number().required("Kullanıcı Numarası Zorunludur!"),
    image: yup.string().required("Fotoğraf Zorunludur!"),
    startYear: yup.date().required("Okul Başlangıç Yılı Zorunludur!"),
    graduationYear: yup.date().required("Mezuniyet Yılı Zorunludur!"),
    oldPosition: yup.string().required("Eski Pozisyon Zorunludur!"),
    oldWorkplaceName: yup.string().required("Eski İş Yeri Zorunludur!"),
    experienceDateStart: yup.date().required("Eski İş Başlama Yılı Zorunludur!"),
    experienceDateFinish: yup.date().required("Eski İş Bitiş Yılı Zorunludur!"),
    foreignLanguages: yup.string().required("Yabancı Dil Zorunludur!"),
    languageLevel: yup.number().required("Yabancı Dil Seviyesi Zorunludur!"),
    githubAccount: yup.string().required("Github Adresi Zorunludur!"),
    linkedinAccount: yup.string().required("Linkedin Adresi Zorunludur!"),
    programmingLanguages: yup.string().required("Yazılım Teknolojileri Zorunludur!"),
    descriptions: yup.string().required("Açıklamalar Zorunludur!"),
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
            <HrmsTextInput name="userId" placeholder="Kullanıcı Numarası" />
            <HrmsTextInput name="image" placeholder="Fotoğraf" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="startYear" placeholder="Okul Başlangıç Yılı" />
            <HrmsTextInput name="graduationYear" placeholder="Mezuniyet Yılı" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="oldPosition" placeholder="Eski Pozisyon" />
            <HrmsTextInput name="oldWorkplaceName" placeholder="Eski İş Yeri" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="experienceDateStart" placeholder="Eski İş Başlama Yılı" />
            <HrmsTextInput name="experienceDateFinish" placeholder="Eski İş Bitiş Yılı" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="foreignLanguages" placeholder="Yabancı Dil" />
            <HrmsTextInput name="languageLevel" placeholder="Yabancı Dil Seviyesi" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="githubAccount" placeholder="Github Adresi" />
            <HrmsTextInput name="linkedinAccount" placeholder="Linkedin Adresi" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="programmingLanguages" placeholder="Yazılım Teknolojileri" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="descriptions" placeholder="Açıklamalar" />
          </FormGroup>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
  );
}
