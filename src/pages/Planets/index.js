import React, { useContext, useEffect, useState } from "react";
import { Title } from "../../App.style";
import { ListPlanet } from "../../components/ListPlanet";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { PlanetContext } from "../../contexts/PlanetContext";

export const Planets = () => {
  const {
    planets,
    getPlanets,
    setDetailPlanet,
    saveFavoritesPlanets,
    favoritesPlanets,
  } = useContext(PlanetContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (!planets) getPlanets();
  });

  const searchPlanet = (term) => {
    const result = planets.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearch(result);
  };

  return (
    <>
      <Navbar />
      <Title>
        <header>VAMOS SABER MAIS SOBRE OS PLANETAS DE STAR WARS</header>
      </Title>
      <Search label="planetas" onSearch={searchPlanet} />
      {planets ? (
        <ListPlanet
          planet={search ? search : planets}
          setDetailPlanet={setDetailPlanet}
          setFavoritesPlanets={saveFavoritesPlanets}
          favoritesPlanets={favoritesPlanets}
          enableFavButton={true}
        />
      ) : null}
    </>
  );
};
