import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Categories extends Component {
  state = {
    categories: [
      { id: 1, name: "Positions" },
      { id: 2, name: "Job Seekers" },
      { id: 3, name: "Employers" },
      { id: 4, name: "Employees" },
    ]
  };

  render() {
    return (
      <div>
        <Menu pointing vertical>
          {this.state.categories.map((category) => (
            <Menu.Item
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              name={category.name}
            />
          ))}
        </Menu>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
