import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PeopleContextProvider } from "./contexts/PeopleContext";
import { PlanetContextProvider } from "./contexts/PlanetContext";
import { StarshipsContextProvider } from "./contexts/StarshipsContext";

ReactDOM.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <PlanetContextProvider>
        <StarshipsContextProvider>
          <App />
        </StarshipsContextProvider>
      </PlanetContextProvider>
    </PeopleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
