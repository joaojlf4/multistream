import { combineReducers } from 'redux';
import statusReducer from './status/reducer';
import isStreamingReducer from './isStreaming/reducer';
<<<<<<< HEAD
import isPreventVisible from './isPreventVisible/reducer';
=======
>>>>>>> fef767039ffa0f3481a55cf1244d45cc0a2c204c

export default combineReducers({
  statusReducer,
  isStreamingReducer,
<<<<<<< HEAD
  isPreventVisible
=======
>>>>>>> fef767039ffa0f3481a55cf1244d45cc0a2c204c
});