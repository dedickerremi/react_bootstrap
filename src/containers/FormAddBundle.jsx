import { connect } from 'react-redux';
import FormAddBundle from '../components/FormAddBundle';
import { postBundle } from '../actions/actions';

const getNameRules = () => {
  return [
    'Name should:',
    '- have minimum 4 characters and at least 2 letters or numbers',
    '- contains only letters, numbers, spaces, - or _'
  ];
};

const getBundleRules = () => {
  return [
    'A Bundle name should:',
    '- At least have 2 segments (One dot or more).',
    '- Each segments must start with a letter.',
    '- All characters must be alphanumerics.'
  ];
};

const validateNameField = (value) => {
  if(value.match(/(^(?=(.*[a-z0-9]){2,})([a-z0-9\\_\-\s]{4,})$)/ui))
    return true;
  return false;
};

const validateBundleField = (value) => {
  if (value.match(/(^([a-z]{1}[a-z\d_]*\.)+[a-z][a-z\d_]*$)/i))
    return true;
  return false;
};


const mapStateToProps = () => ({
  getNameRules : getNameRules(),
  getBundleRules: getBundleRules(),
  validateNameField: validateNameField,
  validateBundleField: validateBundleField
});

const mapDispatchToProps = (dispatch) => ({
  postBundle: data => dispatch(postBundle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBundle);