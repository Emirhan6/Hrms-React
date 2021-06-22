import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function CvCreate() {
  return (
    <div>
      <Segment style={{ marginTop: "3em" }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Kullanıcı Numarası" placeholder="Kullanıcı Numarası" />
            <Form.Input fluid label="Fotoğraf" placeholder="Fotoğraf" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Okul" placeholder="Okul" />
            <Form.Input fluid label="Bölüm" placeholder="Bölüm" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Okul Başlangıç Yılı" placeholder="Okul Başlangıç Yılı" />
            <Form.Input fluid label="Mezuniyet Yılı" placeholder="Mezuniyet Yılı" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Eski Pozisyon" placeholder="Eski Pozisyon" />
            <Form.Input fluid label="Eski İş Yeri" placeholder="Eski İş Yeri" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Eski İş Başlama Yılı" placeholder="Eski İş Başlama Yılı" />
            <Form.Input fluid label="Eski İş Bitiş Yılı" placeholder="Eski İş Bitiş Yılı" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Yabancı Dil Seviyesi" placeholder="Yabancı Dil Seviyesi" />
            <Form.Input fluid label="Yabancı Diller" placeholder="Yabancı Diller" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Github Adresi" placeholder="Github Adresi" />
            <Form.Input fluid label="Linkedin Adresi" placeholder="Linkedin Adresi" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Yazılım Teknolojileri" placeholder="Yazılım Teknolojileri" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Açıklamalar" placeholder="Açıklamalar" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Ekle</Button>
        </Form>
      </Segment>
    </div>
  );
}
