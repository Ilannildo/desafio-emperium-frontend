import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Item, List } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <NavLink to="/">
              <p>Personagens</p>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/planets">
              <p>Planetas</p>
            </NavLink>
            {/* <a href="#">Planetas</a> */}
          </Item>
          <Item>
            <NavLink to="/starships">
              <p>Naves espaciais</p>
            </NavLink>
          </Item>
          {/* <Item>
            <NavLink to="/favoritos">
              <p>Favoritos</p>
            </NavLink>
          </Item> */}
        </List>
      </nav>
    </Container>
  );
};
