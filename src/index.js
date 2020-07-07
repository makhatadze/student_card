import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import {searchStudents, requestStudents} from "./reducers";

const rootReducer = combineReducers({searchStudents, requestStudents})
const store =
    createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
