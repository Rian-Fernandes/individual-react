import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

const api ={
  key: "ed1ec14497365fb7fca5bc55a1713972",
  base: "https://api.openweathermap.org/data/2.5"
}

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
