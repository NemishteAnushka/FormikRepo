import { Form, Formik, validateYupSchema } from "formik";
import React from "react";
import FormikControl from "../FormikControl";
import * as Yup from "yup";
function Registration() {
  const initialValues = {
    email: "",
    password: "",
    confirmPass: "",
    modeOfContact: "",
    phone: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const mode = [
    { key: "Email", value: "email" },
    { key: "Telephone", value: "telephone" },
  ];
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephone",
      then: () => Yup.string().required("Required"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
          type="password"
          label="Password"
          name="password"
          placeholder="Enter the password"
        />
        <FormikControl
          control="input"
          type="password"
          label="Confirm Password"
          name="confirmPass"
          placeholder="Confirm the password"
        />
        <FormikControl
          control="radio"
          label="Mode of Contact"
          name="modeOfContact"
          options={mode}
        />
        <FormikControl
          control="input"
          label="Phone"
          name="phone"
          placeholder="Enter Phone Number"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Registration;
