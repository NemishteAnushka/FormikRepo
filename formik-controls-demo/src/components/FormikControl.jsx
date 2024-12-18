import CheckBox from "./formik-controls/CheckBox";
import DatePicker from "./formik-controls/DatePicker";
// import DatePicker from "./formik-controls/DatePicker";
import Input from "./formik-controls/Input";
import RadioButton from "./formik-controls/radioButton";
import Select from "./formik-controls/Select";
import Textarea from "./formik-controls/Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
