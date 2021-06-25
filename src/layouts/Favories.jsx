import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, DropdownDivider, Label } from "semantic-ui-react";

export default function Favories() {

  const {favorieItems} = useSelector(state => state.favories)

  return (
    <div>
      <Dropdown item text="Favorileriniz">
        <Dropdown.Menu>
          {
            favorieItems.map((favorieItem)=>(
              <Dropdown.Item>
                {favorieItem.jobAdvertisement.jobDescription}
                <Label>{favorieItem.quantity}</Label>
              </Dropdown.Item>
            ))
          }
          
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/favories">Favorilere Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
