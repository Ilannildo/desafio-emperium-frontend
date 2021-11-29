import React from "react";
import { Container, Content } from "../../App.style";

export const CardDetailStarships = ({ starships }) => {
  return (
    <Container>
      <Content>
        <h3>Detalhes da Nave Espacial</h3>
        <br />
        <p>
          <b>Nome:</b> <span>{starships.name}</span>
        </p>
        <p>
          <b>Modelo:</b> <span>{starships.model}</span>
        </p>
        <p>
          <b>Manufatura:</b> <span>{starships.manufacturer}</span>
        </p>
        <p>
          <b>Classe:</b> <span>{starships.starship_class}</span>
        </p>
        <p>
          <b>Velocidade Atmosférica Máxima:</b> <span>{starships.max_atmosphering_speed}</span>
        </p>
        <p>
          <b>MGLT:</b> <span>{starships.MGLT}</span>
        </p>
      </Content>
    </Container>
  );
};
