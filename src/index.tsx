import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, Store} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({
});

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>,
  </React.StrictMode>
);

reportWebVitals();
