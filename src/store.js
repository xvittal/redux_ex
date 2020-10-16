import { createStore } from 'redux';
import { Reducers } from './app/reducers/Reducers';

export const Store = createStore(Reducers);