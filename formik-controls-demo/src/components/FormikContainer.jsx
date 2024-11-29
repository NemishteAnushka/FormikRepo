import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    hobbies: "",
    radioOpt: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required"),
    description: Yup.string().required("Required"),
    hobbies: Yup.string().required("Required"),
    radioOpt: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  const options = [
    { value: "", label: "Select Option" },
    { value: 1, label: "Dance" },
    { value: 2, label: "Sing" },
    { value: 3, label: "Cooking" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter the email"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
            placeholder="Enter description"
            rows={5}
          />
          <FormikControl
            control="select"
            name="hobbies"
            label="Your Hobbies"
            options={options}
          />
          <FormikControl
            control="radio"
            name="radioOpt"
            label="Select Radio Btn"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
