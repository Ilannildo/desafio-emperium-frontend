import React, { createContext, useEffect, useState, useCallback } from "react";
import api from "../services/api";

export const PlanetContext = createContext({});

export const PlanetContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState(null);
  const [detailPlanet, setDetailPlanet] = useState(null);
  const [favoritesPlanets, setFavoritesPlanets] = useState([]);

  useEffect(() => {
    getFavPeoples()
  }, []);

  const getFavPeoples = () => {
    const fav = localStorage.getItem("favoritesPlanets");
    if (fav) {
      setFavoritesPlanets(JSON.parse(fav));
    }
  };

  const saveFavoritesPlanets = (planet) => {
    const index = favoritesPlanets.findIndex(
      (element) => planet.name === element.name
    );
    const existsFav = index !== -1;
    if (existsFav) {
      favoritesPlanets.splice(index, 1);
    } else {
      favoritesPlanets.push(planet);
    }
    localStorage.setItem("favoritesPlanets", JSON.stringify(favoritesPlanets));
  };

  const getPlanets = useCallback(async () => {
    try {
      const swapiResult = await api.get("/planet");
      const { result } = swapiResult.data;
      setPlanets(result);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  },[]);

  const PlanetProviderValue = {
    planets,
    detailPlanet,
    getPlanets,
    setDetailPlanet,
    favoritesPlanets,
    saveFavoritesPlanets,
  };

  return (
    <PlanetContext.Provider value={PlanetProviderValue}>
      {children}
    </PlanetContext.Provider>
  );
};
