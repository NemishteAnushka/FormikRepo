import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
