import React, { useContext } from "react";
import { Title } from "../../App.style";
import { CardDetailPeople } from "../../components/CardDetailPeople";
import { Navbar } from "../../components/Navbar";
import { PeopleContext } from "../../contexts/PeopleContext";

export const DetailPeople = () => {
  const { detailPeople } = useContext(PeopleContext);
  return (
    <>
      <Navbar />
      <Title>
        <header>
          {detailPeople
            ? `Vamos saber mais sobre o ${detailPeople.name}`
            : "Volte para a página de pessoas e selecione um personagem"}
        </header>
      </Title>
      {detailPeople ? <CardDetailPeople people={detailPeople} /> : null}
    </>
  );
};
