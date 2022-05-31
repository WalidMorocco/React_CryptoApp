import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CoinDetail from './components/coins/CoinDetail';
import CoinsList from './components/coins/CoinsList';
import RouteNotFound from './components/RouteNotFound';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cartSlice'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore({
//   reducer:{
//     coins: coinsReducer,
//     cart: cartReducer,
//     [coinsApi.reducerPath]: coinsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(coinsApi.middleware),
// });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            // Rendered by Outlet in Layout.js
            <Route
              index
              element={
                <div >
                  <h1>Welcome to your Crypto App.</h1>
                  <p>Here you can view and save your coins.</p>
                </div>
              }
            />
            <Route path="coins" element={<CoinsList />} />
            <Route path="coins/:coinId" element={<CoinDetail />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
