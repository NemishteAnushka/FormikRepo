import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../formik-component-form/TextError";
function FieldLevelValidations() {
  const initialValues = {
    name: "",
    comments: "",
  };
  //Field Level Validation
  const validateName = (values) => {
    let error;
    if (!values) {
      error = "Required";
    }
    return error;
  };

  const validateComments = (values) => {
    let errorComment;
    if (!values) {
      errorComment = "Required";
    }
    return errorComment;
  };
  return (
    <Formik initialValues={initialValues}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" validate={validateName} />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            type="text"
            id="comments"
            name="comments"
            validate={validateComments}
          />
          <ErrorMessage name="comments" component={TextError} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FieldLevelValidations;
