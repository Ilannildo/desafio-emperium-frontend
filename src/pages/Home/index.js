import React, { useContext, useEffect, useState } from "react";
import { WrapperTitle } from "../../App.style";
import { ListPeople } from "../../components/ListPeople";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { PeopleContext } from "../../contexts/PeopleContext";

export const Home = () => {
  const { peoples, getPeoples, setDetailPeople, saveFavorites, favoritesPeople } =
    useContext(PeopleContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getPeoples(); 
  }, []);

  const searchPeople = (term) => {
    const result = peoples.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearch(result);
  };

  return (
    <>
      <Navbar />
      <WrapperTitle>
        <header>
          Vamos conhecer mais sobre os personagens <br /> QUE A FORÇA ESTEJA COM
          VOCÊ
        </header>
      </WrapperTitle>
      <Search label={` personagem`} onSearch={searchPeople} />
      {peoples ? (
        <ListPeople
          peoples={search ? search : peoples}
          setDetailPeople={setDetailPeople}
          setFavorites={saveFavorites}
          favoritesPeople={favoritesPeople}
          enableFavButton={true}
        />
      ) : null}
    </>
  );
};
