import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted" });
  };
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${log.attention ? "red-text" : "blue-text"}`}
        onClick={() => setCurrent(log)}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">Id #{log.id}</span> last updated by{" "}
        <span className="black-text">{log.dev}</span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="#" onClick={onDelete} className="secondary-content">
        <i className="material-icons red-text">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
