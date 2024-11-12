import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
function UsingFormikComponent() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email formate").required("Required"),
    channel: Yup.string().required("Required"),
  });

  //   we will replace this useformik with formik components
  //   const formik = useFormik({
  //     initialValues: initialValues,
  //     onSubmit: onSubmit,
  //     validationSchema: validationSchma,
  //   });

  //step 2 - import form from formik replace html form with form from fromik
  //step 3 - import Field component from formik as we can get ride of             {...formik.getFieldProps('channel')}
  //   {...formik.getFieldProps('channel')}

  //step 4 - import ErrorMessage component that checks if the fields have errors and are touched then only shows validations

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
          <ErrorMessage name="name" />
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default UsingFormikComponent;
