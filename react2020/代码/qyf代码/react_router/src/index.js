import React from "react"
import {render} from "react-dom"
import {BrowserRouter, HashRouter} from "react-router-dom";

import App from "./components/app"
import "./index.css"

render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ),
  document.querySelector("#root")
)