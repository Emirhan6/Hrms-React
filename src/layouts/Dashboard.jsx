import React from "react";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import PositionList from "../pages/PositionList";
import Categories from "./Categories";
import { Route } from 'react-router';
import { Grid, GridRow } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementCreate from "../pages/JobAdvertisementCreate";

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
          <Route exact path="/jobadcreate" component={JobAdvertisementCreate}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
