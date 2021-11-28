import React from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Itens, 
  Title,
  ButtonDetail,
  ContentRight,
  ButtonFav,
} from "./style";

import FavIconOutline from "../../assets/fav-outline.png";
import FavIcon from "../../assets/fav.png";

export const ListPeople = ({
  peoples,
  setDetailPeople,
  setFavorites,
  favoritesPeople,
  enableFavButton = false,
}) => {
  const navigate = useNavigate();

  const favIconSource = (people) => {
    console.log("Personagem", people.name);
    const found = favoritesPeople.findIndex(
      (element) => people.name === element.name
    );
    console.log(`Pessoa ${people.name} existe? `, found);
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
        {peoples &&
          peoples.map((item) => (
            <li key={item.url}>
              <Title>{item.name}</Title>
              <ContentRight>
                {enableFavButton ? (
                  <ButtonFav
                    onClick={() => {
                      setFavorites(item);
                      navigate("/");
                    }}
                  >
                    {favIconSource(item)}
                  </ButtonFav>
                ) : null}
                <ButtonDetail
                  onClick={() => {
                    setDetailPeople(item);
                    navigate("/detail/people");
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
