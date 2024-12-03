import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "../TextError";
function DatePicker(props) {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              selected={value}
              onChange={(date) => {
                setFieldValue(name, date);
              }}
              placeholderText={placeholder}
              isClearable
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
