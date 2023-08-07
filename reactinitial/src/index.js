import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { makeServer } from './api/mockserver'
makeServer({ environment: 'development' })

ReactDOM.render(<App />, document.getElementById("root"));