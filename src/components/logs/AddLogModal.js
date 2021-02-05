import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState("");

  const onSubmit = () => {
    if (message === "" || dev === "") {
      M.toast({ html: "Please enter a message and a developer" });
    } else {
      const newLog = {
        message,
        attention,
        dev,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${dev}` });
      // Clear fields
      setMessage("");
      setDev("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);
