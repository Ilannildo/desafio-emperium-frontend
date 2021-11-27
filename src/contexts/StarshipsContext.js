import React, { createContext, useState } from "react";
import api from "../services/api";

export const StarshipsContext = createContext({});

export const StarshipsContextProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [detailStarships, setDetailStarships] = useState(null);

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
  };

  return (
    <StarshipsContext.Provider value={StarshipsProviderValue}>
      {children}
    </StarshipsContext.Provider>
  );
};
