import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, applyMiddleware} from "redux"
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
    <Provider store={store}>
        <App />
    </Provider>,
);
