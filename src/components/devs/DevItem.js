import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteDev } from "../../actions/devActions";
import M from "materialize-css/dist/js/materialize";

const DevItem = ({ dev: { firstName, lastName, id }, deleteDev }) => {
  const onDelete = () => {
    deleteDev(id);
    M.toast({ html: `${firstName} ${lastName} was removed from team` });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  dev: PropTypes.object.isRequired,
  deleteDev: PropTypes.func.isRequired,
};

export default connect(null, { deleteDev })(DevItem);
