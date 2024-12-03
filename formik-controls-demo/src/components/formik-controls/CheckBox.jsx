import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function CheckBox(props) {
  const { name, label, options, ...rest } = props;
  console.log(name);
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field }) => {
          return options.map((items) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={items.value}
                  {...field}
                  value={items.value}
                  checked={field.value.includes(items.value)}
                />
                <label htmlFor={items.value}>{items.key}</label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckBox;
