import React, { useContext } from "react";
import { Title } from "../../App.style";
import { CardDetailPlanet } from "../../components/CardDetailPlanet";
import { Navbar } from "../../components/Navbar";
import { PlanetContext } from "../../contexts/PlanetContext";

export const DetailPlanet = () => {
  const { detailPlanet } = useContext(PlanetContext);
  return (
    <>
      <Navbar />
      <Title>
        <header>
          {detailPlanet
            ? `Vamos saber mais sobre o ${detailPlanet.name}`
            : "Volte para a página de pessoas e selecione um personagem"}
        </header>
      </Title>
      {detailPlanet ? <CardDetailPlanet planet={detailPlanet} /> : null}
    </>
  );
};
