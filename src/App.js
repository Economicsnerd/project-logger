import React, { useEffect, Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddDevModal from "./components/devs/AddDevModal";
import DevListModal from "./components/devs/DevListModal";
import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddDevModal />
          <DevListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
