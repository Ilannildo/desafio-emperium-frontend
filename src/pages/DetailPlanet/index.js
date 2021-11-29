import React, { useContext } from "react";
import { WrapperTitle } from "../../App.style";
import { CardDetailPlanet } from "../../components/CardDetailPlanet";
import { Navbar } from "../../components/Navbar";
import { PlanetContext } from "../../contexts/PlanetContext";

export const DetailPlanet = () => {
  const { detailPlanet } = useContext(PlanetContext);
  return (
    <>
      <Navbar />
      <WrapperTitle>
        <header>
          {detailPlanet
            ? `Vamos saber mais sobre o ${detailPlanet.name}`
            : "Volte para a página de pessoas e selecione um personagem"}
        </header>
      </WrapperTitle>
      {detailPlanet ? <CardDetailPlanet planet={detailPlanet} /> : null}
    </>
  );
};
