import React,{ useState, useEffect } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToFavorie } from "../store/actions/favorieActions";

export default function JobAdvertisementList() {
  const dispatch = useDispatch();
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const handleAddToFavorie = (jobAdvertisement) => {
    dispatch(addToFavorie(jobAdvertisement));
    //console.log(`${jobAdvertisement.advertisementId} favorilere eklendi!`)
    toast.success(`${jobAdvertisement.advertisementId} favorilere eklendi!`)
  };

  return (
    <div>
      <Table celled style={{marginTop:"3em",marginLeft:"-3em"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Durumu</Table.HeaderCell>
            <Table.HeaderCell>İlan Son Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.advertisementId}>
              <Table.Cell>{jobAdvertisement.active===true && "Aktif İlan"}{jobAdvertisement.active}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.position.positionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workType}</Table.Cell>
              <Table.Cell><Button primary onClick={()=>handleAddToFavorie(jobAdvertisement)}>Favorilere ekle</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="10">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
