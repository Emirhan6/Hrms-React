import React from "react";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import PositionList from "../pages/PositionList";
import Categories from "./Categories";
import { Grid, GridRow } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <PositionList />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <EmployeeList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
