import React, { useEffect, Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddDevModal from "./components/devs/AddDevModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddDevModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
