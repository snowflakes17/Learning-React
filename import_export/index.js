import React from "react";
//var react=require("react");
import ReactDOM from "react-dom";
//import pi, { double, triple } from "./math.js";
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.double()}</li>
    <li>{pi.triple()}</li>
  </ul>,
  document.getElementById("root")
);