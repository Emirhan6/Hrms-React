import "./App.css";
import React, { Component } from "react";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./layouts/Navi";
import Categories from "./layouts/Categories";
import { Container, Grid } from "semantic-ui-react";

export default class App extends Component {

  state={currentCategory:"",positions:[]}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
  };

  render() {
    return (
      <div className="App">
        <Navi />
        <Grid>
          <Grid.Row>
            <Grid.Column style={{marginTop:"2em",marginLeft:"3em"}} width={2}>
              <Container className="main">
                <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
              </Container>
            </Grid.Column>
            <Grid.Column width={12}>
              <Container className="main">
                <Dashboard />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
