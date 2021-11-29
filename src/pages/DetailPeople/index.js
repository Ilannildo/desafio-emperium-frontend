import React, { useContext } from "react";
import { WrapperTitle } from "../../App.style";
import { CardDetailPeople } from "../../components/CardDetailPeople";
import { Navbar } from "../../components/Navbar";
import { PeopleContext } from "../../contexts/PeopleContext";

export const DetailPeople = () => {
  const { detailPeople } = useContext(PeopleContext);
  return (
    <>
      <Navbar />
      <WrapperTitle>
        <header>
          {detailPeople
            ? `Vamos saber mais sobre o ${detailPeople.name}`
            : "Volte para a página de pessoas e selecione um personagem"}
        </header>
      </WrapperTitle>
      {detailPeople ? <CardDetailPeople people={detailPeople} /> : null}
    </>
  );
};
