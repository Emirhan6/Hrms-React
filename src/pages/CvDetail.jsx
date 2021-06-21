import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CvService from "../services/cvService";
import JobSeekerService from "../services/jobSeekerService";
import { Table,Button } from "semantic-ui-react";

export default function CvDetail() {

  let { id } = useParams();

  const [cv, setCv] = useState({});

  useEffect(() => {
    let cvService = new CvService();
    cvService.getByUserId(id).then((result) => setCv(result.data.data));
  }, []);

  const [jobSeeker, setjobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getById(id)
      .then((result) => setjobSeeker(result.data.data));
  }, []);

  return (
    <div>
      <Table celled padded style={{ marginTop: "2em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı</Table.HeaderCell>
            <Table.HeaderCell>Bilgiler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <h4>Ad</h4>
            </Table.Cell>
            <Table.Cell>{jobSeeker.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <h4>Soyad</h4>
            </Table.Cell>
            <Table.Cell>{jobSeeker.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <h4>Email</h4>
            </Table.Cell>
            <Table.Cell>{jobSeeker.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <h4>Doğum Tarihi</h4>
            </Table.Cell>
            <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Button onClick={cv.githubAccount} icon="github icon"></Button></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Button onClick={cv.githubAccount} icon="linkedin icon"></Button></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
