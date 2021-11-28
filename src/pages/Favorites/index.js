import React, { useContext } from "react";
import { ListPeople } from "../../components/ListPeople";
import { ListPlanet } from "../../components/ListPlanet";
import { Navbar } from "../../components/Navbar";
import { PeopleContext } from "../../contexts/PeopleContext";
import { PlanetContext } from "../../contexts/PlanetContext";
import { StarshipsContext } from "../../contexts/StarshipsContext";
import { FavoritePeopleContainer, Title } from "./style";

export const Favorites = () => {
  const { favoritesPeople, setDetailPeople } = useContext(PeopleContext);
  const { favoritesPlanets, setDetailPlanet } = useContext(PlanetContext);
  const { favoritesStarships, setDetailStarship } = useContext(StarshipsContext);

  return (
    <>
      <Navbar />
      <FavoritePeopleContainer>
        <Title>
          <header>Personagens favoritos</header>
        </Title>
        {favoritesPeople ? (
          <ListPeople
            peoples={favoritesPeople}
            setDetailPeople={setDetailPeople}
            enableFavButton={false}
          />
        ) : null}
      </FavoritePeopleContainer>
      <FavoritePeopleContainer>
        <Title>
          <header>Planetas favoritos</header>
        </Title>
        {favoritesPlanets ? (
          <ListPlanet
            planet={favoritesPlanets}
            setDetailPlanet={setDetailPlanet}
          />
        ) : null}
      </FavoritePeopleContainer>
      <FavoritePeopleContainer>
        <Title>
          <header>Naves espaciais favoritas</header>
        </Title>
        {favoritesStarships ? (
          <ListPlanet
            planet={favoritesStarships}
            setDetailPlanet={setDetailStarship}
          />
        ) : null}
      </FavoritePeopleContainer>
    </>
  );
};
