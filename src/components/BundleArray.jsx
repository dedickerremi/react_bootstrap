import React from 'react';
import PropTypes from 'prop-types';
import Bundle from './Bundle';
import { Table } from "react-bootstrap";

const BundleArray = ({ bundles }) => {
  const render = () => {
    if (bundles.length > 0) {
      return bundles.map(bundle => {
        return <Bundle key={bundle.id} {...bundle} />;
      });
    } else {
      return <tr><td colSpan={3}>There is still not some bundles added</td></tr>;
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>package</th>
        </tr>
      </thead>
      <tbody>
        {
          render()
        }
      </tbody>
    </Table>
  );
};


BundleArray.propTypes = {
  bundles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bundle: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default BundleArray;