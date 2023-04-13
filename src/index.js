import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {rootReducer} from "./redux/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

