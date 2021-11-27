import React from "react";
import { useNavigate } from "react-router";
import { Container, Itens, Title, ButtonDetail } from "./style";

export const ListPlanet = ({ planet, setDetailPlanet }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Itens>
        { planet && planet.map((item) => (
          <li key={item.url}>
            <Title>{item.name}</Title>
            <ButtonDetail
              onClick={() => {
                setDetailPlanet(item);
                navigate("/detail/planet");
              }}
            >
              Ver mais
            </ButtonDetail>
          </li>
        ))}
      </Itens>
    </Container>
  );
};
