import React, { useState, useEffect } from "react";

import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = `Chandrakala Portfolio`;
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <ScrollToTop /> */}
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
