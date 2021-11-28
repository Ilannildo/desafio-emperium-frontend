import React from "react";
import { useNavigate } from "react-router";
import { Container, Itens, Title, ButtonDetail } from "./style";

import FavIconOutline from "../../assets/fav-outline.png";
import FavIcon from "../../assets/fav.png";
import { ButtonFav, ContentRight } from "../ListPeople/style";

export const ListPlanet = ({
  planet,
  setDetailPlanet,
  setFavoritesPlanets, 
  favoritesPlanets,
  enableFavButton = false,
}) => {
  const navigate = useNavigate();

  const favIconSource = (people) => {
    console.log("Personagem", people.name);
    const found = favoritesPlanets.findIndex(
      (element) => people.name === element.name
    );
    console.log(`Planeta ${people.name} existe? `, found);
    if (found !== -1) {
      return <img src={FavIcon} alt="Favoritar" width="30" height="30" />;
    } else {
      return (
        <img src={FavIconOutline} alt="Favoritar" width="30" height="30" />
      );
    }
  };

  return (
    <Container>
      <Itens>
        {planet &&
          planet.map((item) => (
            <li key={item.url}>
              <Title>{item.name}</Title>
              <ContentRight>
                {enableFavButton && (
                  <ButtonFav
                    onClick={() => {
                      setFavoritesPlanets(item);
                      navigate("/planets");
                    }}
                  >
                    {favIconSource(item)}
                  </ButtonFav>
                )}
                <ButtonDetail
                  onClick={() => {
                    setDetailPlanet(item);
                    navigate("/detail/planet");
                  }}
                >
                  Ver detalhes
                </ButtonDetail>
              </ContentRight>
            </li>
          ))}
      </Itens>
    </Container>
  );
};
