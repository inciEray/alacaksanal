import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import clientReducer from "../reducers/clientReducer";
import productReducer from "../reducers/productReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import logger from 'redux-logger';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;