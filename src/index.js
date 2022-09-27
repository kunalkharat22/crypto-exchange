import { Layout, Typography } from "antd";
import { layouts } from "chart.js";
import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";
import 'antd/dist/antd.css'
import App from './App'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    , document.getElementById('root')
)