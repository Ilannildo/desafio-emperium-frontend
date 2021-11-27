import React, { createContext, useState } from "react";
import api from "../services/api";

export const PeopleContext = createContext({});

export const PeopleContextProvider = ({ children }) => {
  const [peoples, setPeoples] = useState(null);
  const [detailPeople, setDetailPeople] = useState(null);

  const getPeoples = async () => {
    try {
      const swapiResult = await api.get("/people");
      const { results } = swapiResult.data;
      setPeoples(results);
    } catch (error) {
      console.log("Opa! algo deu errado.");
    }
  };

  const peopleProviderValue = {
    peoples,
    detailPeople,
    getPeoples,
    setDetailPeople,
  };

  return (
    <PeopleContext.Provider value={peopleProviderValue}>
      {children}
    </PeopleContext.Provider>
  );
};
