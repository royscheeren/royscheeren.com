open BsStorybook;

let default = CSF.make(~title="My CSF Story", ~component=Button);

let button = ({ label, onClick }) => <Button label={label} onClick={onClick} />;
button.args {
  label: "",
  onClick: Action.action("Clicked"),
}

button->CSF.addMeta(~name="Plain Button", ());
