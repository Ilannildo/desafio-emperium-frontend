import React, { useContext } from "react";
import { WrapperTitle } from "../../App.style";
import { CardDetailStarships } from "../../components/CardDetailStarships";
import { Navbar } from "../../components/Navbar";
import { StarshipsContext } from "../../contexts/StarshipsContext";

export const DetailStarships = () => {
  const { detailStarships } = useContext(StarshipsContext);
  return (
    <>
      <Navbar />
      <WrapperTitle>
        <header>
          {detailStarships
            ? `Vamos saber mais sobre o ${detailStarships.name}`
            : "Volte para a página de pessoas e selecione um personagem"}
        </header>
      </WrapperTitle>
      {detailStarships ? (
        <CardDetailStarships starships={detailStarships} />
      ) : null}
    </>
  );
};
