import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormAlert from './FormAlert';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const FormAddBundle = ({
  postBundle,
  getNameRules,
  getBundleRules,
  validateNameField,
  validateBundleField }) => {
  const [name, setName] = useState('');
  const [bundle, setBundle] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [bundleValid, setBundleValid] = useState(false);
  const history = useHistory();

  const handleNameChange = event => {
    setName(event.target.value);
    setNameValid(validateNameField(event.target.value));
  };
  const handleBundleChange = event => {
    setBundle(event.target.value);
    setBundleValid(validateBundleField(event.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bundleValid && nameValid) {
      postBundle({ name:name, bundle:bundle })
        .then(res => {
          if (res.status == 'OK') {
            history.push('/');
          }
          return;
        }).catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div className="text-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={handleNameChange}/>
          { !nameValid ?
            <FormAlert variant='warning' content={getNameRules} />
            :
            <FormAlert variant='success' content={['this package name is correct']} />
          }
        </Form.Group>
        <Form.Group controlId="formGroupBundle">
          <Form.Label>Bundle</Form.Label>
          <Form.Control type="text" value={bundle} placeholder="bundle"
            onChange={handleBundleChange}/>
          { !bundleValid ?
            <FormAlert variant={'warning'} content={getBundleRules} />
            :
            <FormAlert variant='success' content={['This bundle name is correct']} />
          }
        </Form.Group>
        <Button variant="primary" type="submit" disabled={ !bundleValid || !nameValid }>
          Submit
        </Button>
      </Form>
    </div>
  );
};


FormAddBundle.propTypes = {
  postBundle: PropTypes.func.isRequired,
  getNameRules: PropTypes.array.isRequired,
  getBundleRules: PropTypes.array.isRequired,
  validateNameField: PropTypes.func.isRequired,
  validateBundleField: PropTypes.func.isRequired
};

export default FormAddBundle;