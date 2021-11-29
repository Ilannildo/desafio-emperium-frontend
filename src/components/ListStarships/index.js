import React from "react";
import { useNavigate } from "react-router";
import FavIconOutline from "../../assets/fav-outline.png";
import FavIcon from "../../assets/fav.png";
import {
  Container,
  Itens,
  Title,
  ButtonDetail,
  ButtonFav,
  ContentRight,
} from "../../App.style";

export const ListStarships = ({
  starships,
  setDetailStarships,
  saveFavoritesStarships,
  favoritesStarships,
  enableFavButton = false,
}) => {
  const navigate = useNavigate();

  const favIconSource = (people) => {
    const found = favoritesStarships.findIndex(
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
        {starships &&
          starships.map((item) => (
            <li key={item.url}>
              <Title>{item.name}</Title>
              <ContentRight>
                {enableFavButton && (
                  <ButtonFav
                    onClick={() => {
                      saveFavoritesStarships(item);
                      navigate("/starships");
                    }}
                  >
                    {favIconSource(item)}
                  </ButtonFav>
                )}
                <ButtonDetail
                  onClick={() => {
                    setDetailStarships(item);
                    navigate("/detail/starships");
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
