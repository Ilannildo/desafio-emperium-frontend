import React, { useContext } from "react";
import { WrapperTitle } from "../../App.style";
import { ListPeople } from "../../components/ListPeople";
import { ListPlanet } from "../../components/ListPlanet";
import { ListStarships } from "../../components/ListStarships";
import { Navbar } from "../../components/Navbar";
import { PeopleContext } from "../../contexts/PeopleContext";
import { PlanetContext } from "../../contexts/PlanetContext";
import { StarshipsContext } from "../../contexts/StarshipsContext";
import { FavoritePeopleContainer } from "./style";

export const Favorites = () => {
  const { favoritesPeople, setDetailPeople } = useContext(PeopleContext);
  const { favoritesPlanets, setDetailPlanet } = useContext(PlanetContext);
  const { favoritesStarships, setDetailStarships } =
    useContext(StarshipsContext);

  if (
    favoritesPeople.length === 0 &&
    favoritesPlanets.length === 0 &&
    favoritesStarships.length === 0
  ) {
    return (
      <>
        <Navbar />
        <WrapperTitle>
          <header>⭐🔫🧑⚔️ Nenhum favorito ⭐🧔⚔️</header>
        </WrapperTitle>
      </>
    );
  }
  return (
    <>
      <Navbar />
      {favoritesPeople.length > 0 ? (
        <FavoritePeopleContainer>
          <WrapperTitle>
            <header>Personagens favoritos</header>
          </WrapperTitle>
          <ListPeople
            peoples={favoritesPeople}
            setDetailPeople={setDetailPeople}
            enableFavButton={false}
          />
        </FavoritePeopleContainer>
      ) : null}
      {favoritesPlanets.length > 0 ? (
        <FavoritePeopleContainer>
          <WrapperTitle>
            <header>Planetas favoritos</header>
          </WrapperTitle>
          <ListPlanet
            planet={favoritesPlanets}
            setDetailPlanet={setDetailPlanet}
          />
        </FavoritePeopleContainer>
      ) : null}
      {favoritesStarships.length > 0 ? (
        <FavoritePeopleContainer>
          <WrapperTitle>
            <header>Naves espaciais favoritas</header>
          </WrapperTitle>

          <ListStarships
            starships={favoritesStarships}
            setDetailStarships={setDetailStarships}
          />
        </FavoritePeopleContainer>
      ) : null}
    </>
  );
};
