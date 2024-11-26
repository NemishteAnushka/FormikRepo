import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import TextError from "../formik-component-form/TextError";
import * as Yup from "yup";
function ControlValidationOnChangeOnBlur() {
  // Validation is run
  //1) on change event
  //2) on Blur event
  //3) and when atempt to submit the form
  // so we can control 1st two seens by using  validateOnChange={false} and validateOnBlur={false}
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid formate").required("Email is required"),
    channel: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false} //this will stop rendering the validation when onchange field
      validateOnBlur={false} // this will stop rendering on onBlur function
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        {/* render prop */}
        <div className="form-control">
          <label htmlFor="">Address</label>
          <Field name="address">
            {(props) => {
              const { form, field, meta } = props;
              console.log("form.errors", form.errors);
              return (
                <div>
                  <input type="text" {...field} />
                  <ErrorMessage name="address" component={TextError} />
                </div>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ControlValidationOnChangeOnBlur;
