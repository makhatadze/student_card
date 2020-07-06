import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore} from "redux";
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import {searchStudents} from "./reducers";

const store = createStore(searchStudents)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App  />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
