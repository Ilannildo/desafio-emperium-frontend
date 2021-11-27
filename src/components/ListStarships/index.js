import React from "react";
import { useNavigate } from "react-router";
import { Container, Itens, Title, ButtonDetail } from "./style";

export const ListStarships = ({ starships, setDetailStarships }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Itens>
        { starships && starships.map((item) => (
          <li key={item.url}>
            <Title>{item.name}</Title>
            <ButtonDetail
              onClick={() => {
                setDetailStarships(item);
                navigate("/detail/starships");
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
