'use strict';

var Css = require("bs-css-emotion/src/Css.bs.js");

var primaryColour = Css.hex("2C5DF3");

var hoverColour = Css.hex("1443D1");

var disabledColour = Css.hex("CECECE");

var white = Css.hex("FFFFFF");

var gray = Css.hex("CECECE");

var black = Css.hex("121212");

var bodySize = Css.rem(1.25);

var h1Size = Css.rem(3.25);

var h2Size = Css.rem(2.25);

var activeColour = hoverColour;

var textPrimaryColour = black;

var textSecondaryColour = gray;

var textLinkColour = primaryColour;

exports.primaryColour = primaryColour;
exports.hoverColour = hoverColour;
exports.activeColour = activeColour;
exports.disabledColour = disabledColour;
exports.white = white;
exports.gray = gray;
exports.black = black;
exports.textPrimaryColour = textPrimaryColour;
exports.textSecondaryColour = textSecondaryColour;
exports.textLinkColour = textLinkColour;
exports.bodySize = bodySize;
exports.h1Size = h1Size;
exports.h2Size = h2Size;
/* primaryColour Not a pure module */
