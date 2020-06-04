import { combineReducers } from 'redux';
import statusReducer from './status/reducer';
import isStreamingReducer from './isStreaming/reducer';

export default combineReducers({
  statusReducer,
  isStreamingReducer,
});