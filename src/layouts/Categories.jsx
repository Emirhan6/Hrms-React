import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  state = {
    categories: [
      { id: 1, name: "Positions" },
      { id: 2, name: "JobSeekers" },
      { id: 3, name: "Employers" },
      { id: 4, name: "Employees" },
      { id: 5, name: "JobAdvertisements" },
    ],
  };

  render() {
    return (
      <div>
        {/* <Menu inverted pointing vertical>
          {this.state.categories.map((category) => (
            <Menu.Item
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              name={category.name}
              as={Link}
              to={"/" + category.name.toLowerCase()}
            />
          ))}
        </Menu> */}

        <Menu vertical inverted>
          {this.state.categories.map((category) => (
            <Menu.Item>
              <Menu.Header
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
                as={Link}
                to={"/" + category.name.toLowerCase()}
              >
                {category.name}
              </Menu.Header>

              <Menu.Menu>
                <Menu.Item as={Link} to={"/jobadcreate"} name={category.name + "Ekle"} />
              </Menu.Menu>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
