import React from "react";
import { Container, Content } from "./style";

export const CardDetailPlanet = ({ planet }) => {
  return (
    <Container>
      <Content>
        <h3>Detalhes do Planeta</h3>
        <br />
        <p>
          <b>Nome:</b> <span>{planet.name}</span>
        </p>
        <p>
          <b>Periodo de rotação:</b> <span>{planet.rotation_period}</span>
        </p>
        <p>
          <b>Clima:</b> <span>{planet.climate}</span>
        </p>
        <p>
          <b>Terreino:</b> <span>{planet.terrain}</span>
        </p>
        <p>
          <b>População:</b> <span>{planet.population}</span>
        </p>
        <p>
          <b>Gravidade:</b> <span>{planet.gravity}</span>
        </p>
      </Content>
    </Container>
  );
};
