import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState("");

  const onSubmit = () => {
    if (message === "" || dev === "") {
      M.toast({ html: "Please enter a message and a developer" });
    } else {
      console.log("done");

      //   clear fields

      setMessage("");
      setDev("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Project Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="dev"
              value={dev}
              className="browser-default"
              onChange={(e) => setDev(e.target.value)}
            >
              <option value="" disabled>
                Select Developer
              </option>
              <option value="Wilson TheBeachBall">Wilson TheBeachBall</option>
              <option value="Sonny TheFrenchie">Sonny TheFrenchie</option>
              <option value="Sam Jackson">Sam Jackson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          {" "}
          Add Log
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;
