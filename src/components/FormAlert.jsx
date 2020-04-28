import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, Row } from "react-bootstrap";

const FormAlert = ({ variant, content }) => {
  return (
    <Row className='justify-content-md-center'>
      <Col md='auto'>
        <Alert variant={variant}>
          {
            content.map((elem, i) => {
              return <p key={i}>{elem}</p>;
            })
          }
        </Alert>
      </Col>
    </Row>
  );
};

FormAlert.propTypes = {
  content: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
};

export default FormAlert;