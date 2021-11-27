import React from "react";
import { SearchContainer } from "./style";

export const Search = ({ label, onSearch }) => {
  return(
    <SearchContainer>
      <input
        type="text"
        placeholder={`Digite um ${label} para filtrar...`}
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchContainer>
  );
};
