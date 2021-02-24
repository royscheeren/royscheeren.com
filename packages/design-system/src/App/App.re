[@react.component]
let make = () => {
  let onClick = () => Js.log("Button Clicked");

  <div>
    {React.string("My String")}
    <BlinkingGreeting>
      {React.string("My Greeting")}
    </BlinkingGreeting>
    <Button label="My Button" onClick={onClick} />
  </div>;
};
