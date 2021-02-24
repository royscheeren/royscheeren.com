type buttonSize = 
  | Small
  | Medium
  | Large;

module Styles = {
  open Css;
  let sizePartial = size => {
    switch(size) {
      | Small => [fontSize(rem(0.875)), padding2(~v=rem(1.), ~h=rem(1.25))]
      | Medium => [fontSize(rem(1.)), padding2(~v=rem(1.), ~h=rem(1.25))]
      | Large => [fontSize(rem(1.475)), padding2(~v=rem(1.), ~h=rem(1.25))]
    }
  }
  
  let button = size => style(
    List.concat([
      [
        backgroundColor(Theme.primaryColour),
        border(px(0), `none, `currentColor),
        borderRadius(px(999)),
        padding(rem(1.)),
        color(white),
        fontSize(rem(1.)),
        lineHeight(rem(1.)),
        transition(~duration=300, ~delay=0, ~timingFunction=easeInOut, "background-color"),
        outlineStyle(`none),

        selector("&:hover", [
          backgroundColor(Theme.hoverColour),
          cursor(pointer),
        ]),
        selector("&:active", [
          transforms([translate3d(px(1), px(1), px(0))]),
        ])
      ],
      sizePartial(size)
    ]))
};

[@react.component]
let make = (~label, ~onClick, ~size=Medium) => {
  <button onClick={_ => onClick()} className={Styles.button(size)}>{React.string(label)}</button>
};
