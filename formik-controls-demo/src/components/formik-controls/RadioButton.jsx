import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field }) => {
          console.log(field);
          return options.map((option) => {
            return (
              <div key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButton;
