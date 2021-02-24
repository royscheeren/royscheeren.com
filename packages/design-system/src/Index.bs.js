'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$DesignSystem = require("./App/App.bs.js");

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(App$DesignSystem.make, {}), makeContainer(undefined));

exports.makeContainer = makeContainer;
/*  Not a pure module */
