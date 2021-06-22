import React from "react";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import PositionList from "../pages/PositionList";
import { Route } from 'react-router';
import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementCreate from "../pages/JobAdvertisementCreate";
import JobSeekerDetail from "../pages/JobSeekerDetail";
import RegisterForm from "../pages/RegisterForm";
import PositionCreate from "../pages/PositionCreate";
import JobSeekerCreate from "../pages/JobSeekerCreate";
import EmployeeCreate from "../pages/EmployeeCreate";
import EmployerCreate from "../pages/EmployerCreate";
import CvList from "../pages/CvList";
import CvDetail from "../pages/CvDetail";
import CvCreate from "../pages/CvCreate";

export default function Dashboard() {

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={PositionList}/>
            <Route exact path="/positions" component={PositionList}/>
            <Route exact path="/jobseekers" component={JobSeekerList}/>
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/employees" component={EmployeeList}/>
            <Route exact path="/jobadvertisements" component={JobAdvertisementList}/>
            <Route exact path="/cv" component={CvList}/>

            <Route exact path="/jobadvertisementscreate" component={JobAdvertisementCreate}/>
            <Route exact path="/positionscreate" component={PositionCreate}/>
            <Route exact path="/jobseekerscreate" component={JobSeekerCreate}/>
            <Route exact path="/employeescreate" component={EmployeeCreate}/>
            <Route exact path="/employerscreate" component={EmployerCreate}/>
            <Route exact path="/cvcreate" component={CvCreate}/>

            <Route exact path="/jobseeker/:name" component={JobSeekerDetail}/>
            <Route exact path="/cv/:id" component={CvDetail}/>

            <Route exact path="/register" component={RegisterForm}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
