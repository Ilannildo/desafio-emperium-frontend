import React from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Itens,
  Title,
  ButtonDetail,
  ButtonFav,
  ContentRight,
} from "../../App.style";

import FavIconOutline from "../../assets/fav-outline.png";
import FavIcon from "../../assets/fav.png";

export const ListPlanet = ({
  planet,
  setDetailPlanet,
  setFavoritesPlanets,
  favoritesPlanets,
  enableFavButton = false,
}) => {
  const navigate = useNavigate();

  const favIconSource = (people) => {
    const found = favoritesPlanets.findIndex(
      (element) => people.name === element.name
    );
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
