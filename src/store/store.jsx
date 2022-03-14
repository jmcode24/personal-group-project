import { createStore } from 'redux';
import expReducer from '../reducer/expReducer';

export const store = createStore(expReducer);