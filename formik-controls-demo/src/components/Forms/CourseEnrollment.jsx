import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../FormikControl";

function CourseEnrollment() {
  const intialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const courseList = [
    { label: "Select Course", value: "" },
    { label: "FrontEnd", value: "1" },
    { label: "Backend", value: "2" },
    { label: "FullStack", value: "3" },
  ];
  const skillSet = [
    { key: "Html", value: "html" },
    { key: "Css", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];
  return (
    <Formik initialValues={intialValues} onSubmit={onSubmit}>
      <Form>
        <FormikControl
          control="input"
          type="email"
          label="Email"
          name="email"
          placeholder="Enter Email"
        />
        <FormikControl
          control="textarea"
          label="Bio"
          name="bio"
          placeholder="Enter bio"
          rows={2}
        />
        <FormikControl
          control="select"
          label="Courses"
          name="course"
          options={courseList}
        />
        <FormikControl
          control="checkbox"
          label="Skillset"
          name="skillset"
          options={skillSet}
        />
        <FormikControl
          control="date"
          label="Course Date"
          name="courseDate"
          placeholder="select date"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default CourseEnrollment;
