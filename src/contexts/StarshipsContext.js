import React, { createContext, useEffect, useState } from "react";
import api from "../services/api"; 

export const StarshipsContext = createContext({});

export const StarshipsContextProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [detailStarships, setDetailStarships] = useState(null);
  const [favoritesStarships, setFavoritesStarships] = useState([]);

  useEffect(() => {
    if (favoritesStarships.length <= 0) {
      const fav = localStorage.getItem("favoritesStarships");
      if (fav) {
        setFavoritesStarships(JSON.parse(fav));
      }
    }
  }, [favoritesStarships]);

  const saveFavoritesStarships = (starship) => {
    const index = favoritesStarships.findIndex(
      (element) => starship.name === element.name
    );
    const existsFav = index !== -1;
    if (existsFav) {
      favoritesStarships.splice(index, 1);
    } else {
      favoritesStarships.push(starship);
    }
    localStorage.setItem("favoritesStarships", JSON.stringify(favoritesStarships));
  };

  const getStarships = async () => {
    try {
      const swapiResult = await api.get("/starships");
      const { results } = swapiResult.data;
      setStarships(results);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  };

  const StarshipsProviderValue = {
    starships,
    detailStarships,
    getStarships,
    setDetailStarships,
    saveFavoritesStarships,
    favoritesStarships
  };

  return (
    <StarshipsContext.Provider value={StarshipsProviderValue}>
      {children}
    </StarshipsContext.Provider>
  );
};
