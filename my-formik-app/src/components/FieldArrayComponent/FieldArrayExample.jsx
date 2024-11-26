import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

function FieldArrayExample() {
  const initialValues = {
    name: "",
    phNumbers: [""],
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="">List of phone numbers</label>
          <FieldArray name="phNumbers">
            {(props) => {
              console.log(props);
              const { push, remove, form } = props;
              const { values } = form;
              const { phNumbers } = values;

              return (
                <>
                  {phNumbers.map((items, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      <button
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          push("");
                        }}
                      >
                        +
                      </button>
                    </div>
                  ))}
                </>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FieldArrayExample;
