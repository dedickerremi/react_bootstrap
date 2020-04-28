import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BundleList from '../containers/BundleList';
import { fetchBundles } from '../actions/actions';
import Loader from '../components/Loader';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class HomePage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchBundles());
  }
  renderize() {
    const { isLoading, hasErrors } = this.props;
    if (isLoading) {
      return <Loader />;
    } else if (hasErrors){
      return <p>Error occured</p>;
    }
    return <BundleList />;
  }
  render() {
    return (
      <div className="text-center">
        <Link to="/bundle">
          <Button variant="success" className="margin_bottom">Add your bundle</Button>
        </Link>
        { this.renderize() }
      </div>
    );
  }
}
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  bundles: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.bundles.isLoading,
    bundles: state.bundles.items,
    hasErrors: state.bundles.hasErrors,
  };
}



export default connect(mapStateToProps)(HomePage);