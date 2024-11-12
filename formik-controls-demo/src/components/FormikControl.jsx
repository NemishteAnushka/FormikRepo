import Input from "./Input";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
    default:
      return null;
  }
}

export default FormikControl;
