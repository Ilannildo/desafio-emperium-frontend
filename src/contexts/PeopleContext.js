import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../services/api";

export const PeopleContext = createContext({});

export const PeopleContextProvider = ({ children }) => {
  const [peoples, setPeoples] = useState(null);
  const [detailPeople, setDetailPeople] = useState(null);
  const [favoritesPeople, setFavorites] = useState([]);

  useEffect(() => {
    const fav = localStorage.getItem("favoritesPeople");
    if (fav) {
      setFavorites(JSON.parse(fav));
    }
  }, []);

  const getPeoples = useCallback(async () => {
    try {
      const swapiResult = await api.get("/people");
      const { result } = swapiResult.data;
      setPeoples(result);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  }, []);

  const saveFavorites = (people) => {
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
