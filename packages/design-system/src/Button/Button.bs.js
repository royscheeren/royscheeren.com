'use strict';

var Css = require("bs-css-emotion/src/Css.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$DesignSystem = require("../Theme/Theme.bs.js");

function sizePartial(size) {
  switch (size) {
    case /* Small */0 :
        return {
                hd: Css.fontSize(Css.rem(0.875)),
                tl: {
                  hd: Css.padding2(Css.rem(1), Css.rem(1.25)),
                  tl: /* [] */0
                }
              };
    case /* Medium */1 :
        return {
                hd: Css.fontSize(Css.rem(1)),
                tl: {
                  hd: Css.padding2(Css.rem(1), Css.rem(1.25)),
                  tl: /* [] */0
                }
              };
    case /* Large */2 :
        return {
                hd: Css.fontSize(Css.rem(1.475)),
                tl: {
                  hd: Css.padding2(Css.rem(1), Css.rem(1.25)),
                  tl: /* [] */0
                }
              };
    
  }
}

function button(size) {
  return Curry._1(Css.style, List.concat({
                  hd: {
                    hd: Css.backgroundColor(Theme$DesignSystem.primaryColour),
                    tl: {
                      hd: Css.border(Css.px(0), "none", "currentColor"),
                      tl: {
                        hd: Css.borderRadius(Css.px(999)),
                        tl: {
                          hd: Css.padding(Css.rem(1)),
                          tl: {
                            hd: Css.color(Css.white),
                            tl: {
                              hd: Css.fontSize(Css.rem(1)),
                              tl: {
                                hd: Css.lineHeight(Css.rem(1)),
                                tl: {
                                  hd: Css.transition(300, 0, Css.easeInOut, "background-color"),
                                  tl: {
                                    hd: Css.outlineStyle("none"),
                                    tl: {
                                      hd: Css.selector("&:hover", {
                                            hd: Css.backgroundColor(Theme$DesignSystem.hoverColour),
                                            tl: {
                                              hd: Css.cursor(Css.pointer),
                                              tl: /* [] */0
                                            }
                                          }),
                                      tl: {
                                        hd: Css.selector("&:active", {
                                              hd: Css.transforms({
                                                    hd: Css.translate3d(Css.px(1), Css.px(1), Css.px(0)),
                                                    tl: /* [] */0
                                                  }),
                                              tl: /* [] */0
                                            }),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  tl: {
                    hd: sizePartial(size),
                    tl: /* [] */0
                  }
                }));
}

var Styles = {
  sizePartial: sizePartial,
  button: button
};

function Button(Props) {
  var label = Props.label;
  var onClick = Props.onClick;
  var sizeOpt = Props.size;
  var size = sizeOpt !== undefined ? sizeOpt : /* Medium */1;
  return React.createElement("button", {
              className: button(size),
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, label);
}

var make = Button;

exports.Styles = Styles;
exports.make = make;
/* Css Not a pure module */
