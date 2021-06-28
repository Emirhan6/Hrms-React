import { Formik } from "formik";
import React from "react";
import { Form } from "formik";
import { Button, FormGroup, Segment } from "semantic-ui-react";
import * as yup from "yup";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

export default function JobAdvertisementCreate() {
  const jobOptions = [
    { key: "uç", value: "uç", text: "Uzaktan Çalışma" },
    { key: "iç", value: "iç", text: "İş Yerinde Çalışma" },
  ];

  const workTimeOptions = [
    { key: "1", value: "1", text: "Tam Zamanlı" },
    { key: "2", value: "2", text: "Yarı Zamanlı" },
  ];

  const cities = [
    { key: "51", value: "51", text: "Niğde" },
    { key: "52", value: "52", text: "Ordu" },
  ];

  const positions = [
    { key: "1", value: "1", text: "Software Developer" },
    { key: "2", value: "2", text: "Backend Developer" },
  ];
  const initialValues = {
    workType: "",
    workTime: "",
    minSalary: "",
    maxSalary: "",
    releaseDate: "",
    applicationDeadline: "",
    positionName: "",
    numberOfOpenPosition: "",
    cityName: "",
    jobDescription: "",
  };

  const schema = yup.object({
    workType: yup.string().required("Çalışma Türü Zorunludur!"),
    workTime: yup.string().required("Çalışma Zamanı Zorunludur!"),
    minSalary: yup.number().required("Minimum Maaş Zorunludur!"),
    maxSalary: yup.number().required("Maksimum Maaş Zorunludur!"),
    releaseDate: yup.date().required("Yayınlanma Tarihi Zorunludur!"),
    applicationDeadline: yup.date().required("Bitiş Tarihi Zorunludur!"),
    positionName: yup.string().required("Açık Pozisyon Zorunludur!"),
    numberOfOpenPosition: yup.number().required("Açık Pozisyon Sayısı Zorunludur!"),
    cityName: yup.string().required("Şehir Zorunludur!"),
    jobDescription: yup.string().required("Açıklama Zorunludur!"),
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
            <HrmsTextInput name="workType" placeholder="Çalışma Seçenekleri" />
            <HrmsTextInput name="workTime" placeholder="Çalışma Zamanı Özelliği" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="minSalary" placeholder="Minimum Maaş" />
            <HrmsTextInput name="maxSalary" placeholder="Maksimum Maaş" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="releaseDate" placeholder="Yayınlanma Tarihi" />
            <HrmsTextInput name="applicationDeadline" placeholder="Bitiş Tarihi" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="positionName" placeholder="Açık Pozisyon" />
            <HrmsTextInput name="numberOfOpenPosition" placeholder="Açık Pozisyon Sayısı" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="cityName" placeholder="Şehir" />
          </FormGroup>
          <FormGroup widths="equal">
            <HrmsTextInput name="jobDescription" placeholder="Açıklamalar" />
          </FormGroup>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Segment>
    </Formik>
    );
}