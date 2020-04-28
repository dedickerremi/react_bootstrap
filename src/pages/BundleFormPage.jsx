import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import FormAddBundle from "../containers/FormAddBundle";

const BundleFormPage = () => {
  return (
    <FormAddBundle />
  );
};

BundleFormPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BundleFormPage);