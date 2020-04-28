import { RECEIVE_BUNDLES_FAILURE, RECEIVE_BUNDLES_SUCCESS, IS_LOADING } from "./actionTypes";
import { config } from '../config';
import BundleModel from '../model/BundleModel';


const getBundlesSuccess = (bundles) => {
  return { type: RECEIVE_BUNDLES_SUCCESS, payload: bundles };
};

const getBundlesFailure = () => {
  return { type: RECEIVE_BUNDLES_FAILURE };
};

function requestLoading() {
  return { type: IS_LOADING };
}

export function fetchBundles() {
  return async dispatch => {
    dispatch(requestLoading());
    try {
      const response = await fetch(config.API_URL+'/bundle');
      const data = await response.json();
      if (data.data) {
        const bundles = data.data.map(obj => {
          if (BundleModel.checkProperty(obj)) {
            return new BundleModel(obj.id, obj.name, obj.bundle);
          }
          return;
        });
        dispatch(getBundlesSuccess(bundles));
      } else {
        throw new Error('Fetching bundles got an expected problem');
      }
    } catch (error) {
      dispatch(getBundlesFailure());
    }
  };
}

export function postBundle(bundle) {
  return async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bundle)
      };
      const response = await fetch(config.API_URL+'/bundle', requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}