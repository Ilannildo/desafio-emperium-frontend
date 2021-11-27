import React from "react";
import { Container, Content } from "./style";

export const CardDetailPeople = ({ people }) => {
  return (
    <Container>
      <Content>
        <h3>Detalhes do Personagem</h3>
        <br />
        <p>
          <b>Nome:</b> <span>{people.name}</span>
        </p>
        <p>
          <b>Altura:</b> <span>{people.height}</span>
        </p>
        <p>
          <b>Peso:</b> <span>{people.mass}</span>
        </p>
        <p>
          <b>Nascimento:</b> <span>{people.birth_year}</span>
        </p>
        <p>
          <b>Cabelo:</b> <span>{people.hair_color}</span>
        </p>
        <p>
          <b>Sexo:</b> <span>{people.gender}</span>
        </p>
      </Content>
    </Container>
  );
};
