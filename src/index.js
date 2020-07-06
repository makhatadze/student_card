import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentItem from "./students/StundentItem";
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { Students } from './data/Students'

ReactDOM.render(
    <React.StrictMode>
        <div>
            <StudentItem id={Students[0].ID} name={Students[0].Name}  gender={Students[0].gender} />
            <StudentItem id={Students[1].ID} name={Students[1].Name}  gender={Students[1].gender} />
            <StudentItem id={Students[2].ID} name={Students[2].Name}  gender={Students[2].gender} />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
