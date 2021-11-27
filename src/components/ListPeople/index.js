import React from "react";
import { useNavigate } from "react-router";
import { Container, Itens, Title, ButtonDetail } from "./style";

export const ListPeople = ({ peoples, setDetailPeople }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Itens>
        { peoples && peoples.map((item) => (
          <li key={item.url}>
            <Title>{item.name}</Title>
            <ButtonDetail
              onClick={() => {
                setDetailPeople(item);
                navigate("/detail/people");
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
