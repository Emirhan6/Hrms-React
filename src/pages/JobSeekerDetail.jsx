import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerDetail() {
  let { id } = useParams();
  let {name} = useParams();

  const [jobSeeker, setjobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getByName(name)
      .then((result) => setjobSeeker(result.data.data));
  }, []);

  

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              style={{marginBottom:"2em"}}
              size="tiny"
              src={jobSeeker.imageUrl}
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
