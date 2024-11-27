import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import TextError from "../formik-component-form/TextError";
import * as Yup from "yup";
function LoadSavedData() {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const savedData = {
    name: "Anushka Nemishte",
    email: "anu@gmail.com",
    phoneNumber: "8010133160",
  };
  const [formValue, setFormValue] = useState(null);
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid formate").required("Required"),
    phoneNumber: Yup.number().typeError("Numeric").required("Required"),
  });
  return (
    <Formik
      initialValues={formValue || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(props) => {
        console.log(props);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" id="phoneNumber" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component={TextError} />
            </div>
            {/* isValid is true when there are no errors message */}
            {/* dirty prop in formik is also very usefull it remains false untill the user intract with the form */}
            <button type="submit" disabled={props.isSubmitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setFormValue(savedData);
              }}
            >
              Load Saved Data
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoadSavedData;
