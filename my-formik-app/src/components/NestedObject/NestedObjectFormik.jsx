import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "../formik-component-form/TextError";

function NestedObjectFormik() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      instagram: "",
      linkdin: "",
    },
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email formate").required("Required"),
    channel: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
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
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
        </div>
        {/* field other than text (textarea) */}
        {/* use field component not <textarea> */}
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            placeholder="Add comments"
          />
          <ErrorMessage name="comments" />
        </div>

        {/* Field components with rendering props method */}
        {/* <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              console.log(props);
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div> */}

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <Field type="text" id="instagram" name="social.instagram" />
        </div>
        <div className="form-control">
          <label htmlFor="linkdin">LinkdIn</label>
          <Field type="text" id="linkdin" name="social.linkdin" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NestedObjectFormik;
