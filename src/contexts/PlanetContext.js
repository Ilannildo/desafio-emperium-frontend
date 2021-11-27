import React, { createContext, useState } from "react";
import api from "../services/api";

export const PlanetContext = createContext({});

export const PlanetContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState(null);
  const [detailPlanet, setDetailPlanet] = useState(null);

  const getPlanets = async () => {
    try {
      const swapiResult = await api.get("/planets");
      const { results } = swapiResult.data;
      setPlanets(results);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  };

  const PlanetProviderValue = {
    planets,
    detailPlanet,
    getPlanets,
    setDetailPlanet,
  };

  return (
    <PlanetContext.Provider value={PlanetProviderValue}>
      {children}
    </PlanetContext.Provider>
  );
};
