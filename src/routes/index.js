import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailPeople } from "../pages/DetailPeople";
import { DetailPlanet } from "../pages/DetailPlanet";
import { DetailStarships } from "../pages/DetailStarships";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Planets } from "../pages/Planets";
import { Starships } from "../pages/Spaceships";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/planets" element={<Planets />} />
          <Route exact path="/starships" element={<Starships />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/detail/people" element={<DetailPeople />} />
          <Route exact path="/detail/planet" element={<DetailPlanet />} />
          <Route exact path="/detail/starships" element={<DetailStarships />} />
        </Routes>
    </Router>
  );
};
