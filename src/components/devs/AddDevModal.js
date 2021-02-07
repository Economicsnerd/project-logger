import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDev } from "../../actions/devActions";

const AddDevModal = ({ addDev }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the full name of your developer" });
    } else {
      addDev({
        firstName,
        lastName,
      });
    }
    setFirstName("");
    setLastName("");
  };

  return (
    <div id="add-dev-modal" className="modal">
      <div className="modal-content">
        <h4>New Dev</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddDevModal.propTypes = {
  addDev: PropTypes.func.isRequired,
};

export default connect(null, { addDev })(AddDevModal);
