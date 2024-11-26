import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import TextError from "../formik-component-form/TextError";
import * as Yup from "yup";
function ArrayFormik() {
  const initialValues = {
    name: "",
    phoneNumber: ["", ""],
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber1">Phone Number 1</label>
          <Field type="text" id="phoneNumber1" name="phoneNumber[0]" />
          <ErrorMessage name="phoneNumber[0]" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber2">Phone Number 2</label>
          <Field type="text" id="phoneNumber2" name="phoneNumber[1]" />
          <ErrorMessage name="phoneNumber[1]" component={TextError} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ArrayFormik;
