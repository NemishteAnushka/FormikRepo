import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../FormikControl";
import * as Yup from "yup";
function LoginForm() {
  const initialValue = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid").required("required"),
    password: Yup.string().required("required"),
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter the email"
            />
            <FormikControl
              control="input"
              type="text"
              label="Password"
              name="password"
              placeholder="Enter the password"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
