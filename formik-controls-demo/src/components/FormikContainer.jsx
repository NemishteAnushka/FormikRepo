import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    hobbies: "",
    radioOpt: "",
    checkboxOpt: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required"),
    description: Yup.string().required("Required"),
    hobbies: Yup.string().required("Required"),
    radioOpt: Yup.string().required("Required"),
    checkboxOpt: Yup.array().required("Select any one"),
    birthDate: Yup.date().required("req"),
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
  const checkboxOptions = [
    { key: "Option 1 check", value: "1" },
    { key: "Option 2 check", value: "2" },
    { key: "Option 3 check", value: "3" },
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
          <FormikControl
            control="checkbox"
            name="checkboxOpt"
            label="Select checkbox topic"
            options={checkboxOptions}
          />
          <FormikControl
            control="date"
            name="birthDate"
            label="BirthDate"
            placeholder="pick"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
