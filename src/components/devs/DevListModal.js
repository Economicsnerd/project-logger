import React, { useState, useEffect } from "react";
import DevItem from "./DevItem";

const DevListModal = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeam();
    // eslint-disable-next-line
  }, []);

  const getTeam = async () => {
    setLoading(true);

    const res = await fetch("/team");
    const data = await res.json();

    setTeam(data);
    setLoading(false);
  };
  return (
    <div id="dev-list-modal" className="modal">
      <div className="modal-content">
        <h4>Developer List</h4>
        <ul className="collection">
          {!loading && team.map((dev) => <DevItem dev={dev} key={dev.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default DevListModal;
