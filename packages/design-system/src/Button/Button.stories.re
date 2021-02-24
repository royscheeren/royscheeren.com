open BsStorybook;

let default = CSF.make(~title="My CSF Story", ());

let button = () => <Button label="" onClick={Action.action("Click")} />;

button->CSF.addMeta(~name="Plain Button", ());
