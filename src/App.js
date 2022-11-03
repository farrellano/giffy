import "./App.css";
import React, { useState } from "react";
import { Route } from "wouter";

import Detail from "./pages/Detail/Index";
import Home from "./pages/Home/Index";
import Search from "./pages/SearchResults/Index";
import Context from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContexProvider";

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <Context.Provider value={{ name: "fas 2", suscribite: true }}>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Route component={Home} path="/" />

            <Route component={Search} path="/search/:keyword" />

            <Route component={Detail} path="/detail/:id" />
            <Route component={() => <h1>404 Error :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
