import { connect } from 'react-redux';
import BundleArray from '../components/BundleArray';

const mapStateToProps = state => ({
  bundles: state.bundles.items
});

export default connect(mapStateToProps)(BundleArray);