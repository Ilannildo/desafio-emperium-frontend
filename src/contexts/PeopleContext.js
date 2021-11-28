import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const PeopleContext = createContext({});

export const PeopleContextProvider = ({ children }) => {
  const [peoples, setPeoples] = useState(null);
  const [detailPeople, setDetailPeople] = useState(null);
  const [favoritesPeople, setFavorites] = useState([]);

  useEffect(() => {
    if (favoritesPeople.length <= 0) {
      const fav = localStorage.getItem("favoritesPeople");
      if (fav) {
        setFavorites(JSON.parse(fav));
      }
    }
  }, [favoritesPeople]);

  const getPeoples = async () => {
    try {
      const swapiResult = await api.get("/people");
      const { result } = swapiResult.data;
      console.log("Result", result);
      setPeoples(result);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  };

  const saveFavorites = (people) => {
    // const index = favoritesPeople.indexOf(people);
    const index = favoritesPeople.findIndex(
      (element) => people.name === element.name
    );
    const existsFav = index !== -1;
    if (existsFav) {
      favoritesPeople.splice(index, 1);
    } else {
      favoritesPeople.push(people);
    }
    localStorage.setItem("favoritesPeople", JSON.stringify(favoritesPeople));
  };

  const peopleProviderValue = {
    peoples,
    detailPeople,
    getPeoples,
    setDetailPeople,
    saveFavorites,
    favoritesPeople,
  };

  return (
    <PeopleContext.Provider value={peopleProviderValue}>
      {children}
    </PeopleContext.Provider>
  );
};
