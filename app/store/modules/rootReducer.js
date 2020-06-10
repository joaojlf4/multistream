import { combineReducers } from 'redux';
import statusReducer from './status/reducer';
import isStreamingReducer from './isStreaming/reducer';
import isPreventVisible from './isPreventVisible/reducer';

export default combineReducers({
  statusReducer,
  isStreamingReducer,
  isPreventVisible
});