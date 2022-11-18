import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import handleBook from './books/book';
import handleStatus from './categories/categories';

const reducers = combineReducers({
  handleBook,
  handleStatus,
});
const store = configureStore({
  reducer: reducers,
});
