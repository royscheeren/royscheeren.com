'use strict';

var React = require("react");
var CSF$BsStorybook = require("bs-storybook/src/CSF.bs.js");
var Button$DesignSystem = require("./Button.bs.js");
var AddonActions = require("@storybook/addon-actions");

var $$default = CSF$BsStorybook.make("My CSF Story", undefined, undefined, undefined, undefined, undefined, undefined);

function button(param) {
  return React.createElement(Button$DesignSystem.make, {
              label: "",
              onClick: AddonActions.action("Click")
            });
}

CSF$BsStorybook.addMeta(button, "Plain Button", undefined, undefined, undefined);

exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.button = button;
/* default Not a pure module */
