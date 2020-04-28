import React from 'react';
import PropTypes from 'prop-types';

const Bundle = ({ id, name,bundle }) =>
  <tr
  >
    <td>{id}</td>
    <td>{name}</td>
    <td>{bundle}</td>
  </tr>;


Bundle.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bundle: PropTypes.string.isRequired
};

export default Bundle;