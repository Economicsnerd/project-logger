import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DevItem from "./DevItem";
import { getDev } from "../../actions/devActions";

const DevListModal = ({ getDev, dev: { devs, loading } }) => {
  useEffect(() => {
    getDev();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="dev-list-modal" className="modal">
      <div className="modal-content">
        <h4>Developer List</h4>
        <ul className="collection">
          {!loading &&
            devs !== null &&
            devs.map((dev) => <DevItem dev={dev} key={dev.id} />)}
        </ul>
      </div>
    </div>
  );
};

DevListModal.propTypes = {
  dev: PropTypes.object.isRequired,
  getDev: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dev: state.dev,
});

export default connect(mapStateToProps, { getDev })(DevListModal);
