import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${log.attention ? "red-text" : "blue-text"}`}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">Id #{log.id}</span> last updated by{" "}
        <span className="black-text">{log.dev}</span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="#" className="secondary-content">
        <i className="material-icons red-text">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
