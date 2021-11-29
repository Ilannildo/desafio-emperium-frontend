import React, { useContext, useEffect, useState } from "react";
import { WrapperTitle } from "../../App.style";
import { ListStarships } from "../../components/ListStarships";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { StarshipsContext } from "../../contexts/StarshipsContext";

export const Starships = () => {
  const {
    starships,
    getStarships,
    setDetailStarships,
    saveFavoritesStarships,
    favoritesStarships,
  } = useContext(StarshipsContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getStarships();
  }, []);

  const searchStarships = (term) => {
    const result = starships.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearch(result);
  };

  return (
    <>
      <Navbar />
      <WrapperTitle>
        <header>VAMOS SABER MAIS SOBRE AS ESPAÇO-NAVES</header>
      </WrapperTitle>
      <Search label={`a nave espacial`} onSearch={searchStarships} />
      {starships ? (
        <ListStarships
          starships={search ? search : starships}
          setDetailStarships={setDetailStarships}
          saveFavoritesStarships={saveFavoritesStarships}
          favoritesStarships={favoritesStarships}
          enableFavButton={true}
        />
      ) : null}
    </>
  );
};
