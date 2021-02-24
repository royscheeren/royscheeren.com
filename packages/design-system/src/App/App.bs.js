'use strict';

var React = require("react");
var Button$DesignSystem = require("../Button/Button.bs.js");
var BlinkingGreeting$DesignSystem = require("../BlinkingGreeting/BlinkingGreeting.bs.js");

function App(Props) {
  var onClick = function (param) {
    console.log("Button Clicked");
    
  };
  return React.createElement("div", undefined, "My String", React.createElement(BlinkingGreeting$DesignSystem.make, {
                  children: "My Greeting"
                }), React.createElement(Button$DesignSystem.make, {
                  label: "My Button",
                  onClick: onClick
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
