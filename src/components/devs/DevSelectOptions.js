import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDev } from "../../actions/devActions";

const DevSelectOptions = ({ getDev, dev: { devs, loading } }) => {
  useEffect(() => {
    getDev();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    devs !== null &&
    devs.map((d) => (
      <option key={d.id} value={`${d.firstName}  ${d.lastName}`}>
        {d.firstName} {d.lastName}
      </option>
    ))
  );
};

DevSelectOptions.propTypes = {
  dev: PropTypes.object.isRequired,
  getDev: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dev: state.dev,
});

export default connect(mapStateToProps, { getDev })(DevSelectOptions);
