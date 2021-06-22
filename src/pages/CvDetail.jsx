import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CvService from "../services/cvService";
import JobSeekerService from "../services/jobSeekerService";
import { Table, Card, Icon, Image} from "semantic-ui-react";

export default function CvDetail() {

  let { id } = useParams();

  const [cv, setCv] = useState({});

  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCvs().then((result) => setCvs(result.data.data));
  }, []);

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
          {
            cvs.map(cv=>(
              <Table.Row>
                <Table.Cell><h4>Github</h4></Table.Cell>
                <Table.Cell>{cv.githubAccount}</Table.Cell>
              </Table.Row>
            ))
          }
          {
            cvs.map(cv=>(
              <Table.Row>
                <Table.Cell><h4>Linkedin</h4></Table.Cell>
                <Table.Cell>{cv.linkedinAccount}</Table.Cell>
              </Table.Row>
            ))
          }
          {
            cvs.map(cv=>(
              <Table.Row>
                <Table.Cell><h4>Yabancı Diller</h4></Table.Cell>
                <Table.Cell>{cv.foreignLanguages} (Seviyesi : {cv.languageLevel})</Table.Cell>
              </Table.Row>
            ))
          }
          {
            cvs.map(cv=>(
              <Table.Row>
                <Table.Cell><h4>Yazılım Teknolojileri</h4></Table.Cell>
                <Table.Cell>{cv.programmingLanguages}</Table.Cell>
              </Table.Row>
            ))
          }
          {
            cvs.map(cv=>(
              <Table.Row>
                <Table.Cell><h4>Okul</h4></Table.Cell>
                <Table.Cell>{cv.schoolName} (Bölümü : {cv.department})</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
