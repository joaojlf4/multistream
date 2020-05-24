import { createStore } from 'redux';
import statusReducer from './modules/status/reducer';

const store = createStore(statusReducer);

export default store;