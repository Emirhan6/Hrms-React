import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CvService from "../services/cvService";
import { Button, Table } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CvList() {

    const [cvs, setCvs] = useState([]);

    useEffect(() => {
        let cvService = new CvService();
        cvService.getCvs().then((result) => setCvs(result.data.data));
    }, []);

  return (
    <div>
      <Table celled padded style={{ marginTop: "2em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Eski İş Yeri</Table.HeaderCell>
            <Table.HeaderCell>Eski Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Yabancı Diller</Table.HeaderCell>
            <Table.HeaderCell>Programlama Dilleri</Table.HeaderCell>
            <Table.HeaderCell>Açıklamalar</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.cvId}>
              <Table.Cell singleLine>{cv.oldWorkplaceName}</Table.Cell>
              <Table.Cell singleLine>{cv.oldPosition}</Table.Cell>
              <Table.Cell>{cv.foreignLanguages}</Table.Cell>
              <Table.Cell textAlign="left">{cv.programmingLanguages}</Table.Cell>
              <Table.Cell>{cv.descriptions}</Table.Cell>
              <Table.Cell><Button as={NavLink} to={`/cv/${cv.jobSeeker.userId}`}>Detaylar</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
