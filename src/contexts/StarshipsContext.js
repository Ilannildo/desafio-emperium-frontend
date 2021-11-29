import React, { createContext, useCallback, useEffect, useState } from "react";
import api from "../services/api";

export const StarshipsContext = createContext({});

export const StarshipsContextProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [detailStarships, setDetailStarships] = useState(null);
  const [favoritesStarships, setFavoritesStarships] = useState([]);

  useEffect(() => {
    const fav = localStorage.getItem("favoritesStarships");
    if (fav) {
      setFavoritesStarships(JSON.parse(fav));
    }
  }, []);

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
    localStorage.setItem(
      "favoritesStarships",
      JSON.stringify(favoritesStarships)
    );
  };

  const getStarships = useCallback(async () => {
    try {
      const swapiResult = await api.get("/starship");
      const { result } = swapiResult.data;
      setStarships(result);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  },[]);

  const StarshipsProviderValue = {
    starships,
    detailStarships,
    getStarships,
    setDetailStarships,
    saveFavoritesStarships,
    favoritesStarships,
  };

  return (
    <StarshipsContext.Provider value={StarshipsProviderValue}>
      {children}
    </StarshipsContext.Provider>
  );
};
