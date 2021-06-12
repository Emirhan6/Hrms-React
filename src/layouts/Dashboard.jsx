import React from "react";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import PositionList from "../pages/PositionList";
import Categories from "./Categories";
import { Grid, GridRow } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            
          </Grid.Column>
          <Grid.Column width={12}>
            <PositionList title="Positions" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <JobSeekerList title="JobSeekers" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <EmployerList title="Employers" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <EmployeeList title="Employees" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList title="Job Advertisements" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
