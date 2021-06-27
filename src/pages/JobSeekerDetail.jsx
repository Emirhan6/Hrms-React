import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import ImageService from "../services/imageService";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerDetail() {
  let { id } = useParams();
  let {name} = useParams();

  const [jobSeeker, setjobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getById(id)
      .then((result) => setjobSeeker(result.data.data));
  }, []);

  const [image, setImage] = useState({});

  useEffect(() => {
    let userId = jobSeeker.userId
    let imageService = new ImageService();
    imageService
      .getById(id)
      .then((result) => setImage(result.data.data));
      console.log(id)
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              style={{marginBottom:"2em"}}
              size="tiny"
              src={image.url}
            />
            <Card.Header>{jobSeeker.firstName+" "+jobSeeker.lastName}</Card.Header>
            <Card.Meta>Kullanıcı Numarası : {jobSeeker.userId}</Card.Meta>
            <Card.Description>
              {jobSeeker.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
