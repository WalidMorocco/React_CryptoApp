import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CoinDetail from './components/coins/CoinDetail';
import CoinsList from './components/coins/CoinsList';
import RouteNotFound from './components/RouteNotFound';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          // Rendered by Outlet in Layout.js
          <Route
            index
            element={
              <div className="flex-centered">This is the home screen</div>
            }
          />
          <Route path="coins" element={<CoinsList />} />
          <Route path="coins/:coinId" element={<CoinDetail />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
