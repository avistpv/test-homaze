import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom"
import {createStore, applyMiddleware, Store, compose} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { configureStore } from '@reduxjs/toolkit'
const store: Store<CardState, CardAction> & {
    dispatch: DispatchType
} = createStore(
    reducer, applyMiddleware(thunk))



// const composeEnhancers =
//     typeof window === 'object' &&
//     // @ts-ignore
//     window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
//         // @ts-ignore
//         window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;
//
// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunk)))
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
