import { useFormik } from "formik";
import * as Yup from "yup";
function Youtube() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  //   const validate = (values) => {
  //     // this function must return objects
  //     //keys of the object should be similar to name attribute
  //     let errors = {};
  //     if (!values.name) {
  //       errors.name = "Required";
  //     }
  //     if (!values.email) {
  //       errors.email = "Required";
  //     }
  //     if (!values.channel) {
  //       errors.channel = "Required";
  //     }
  //     return errors;
  //   };
  const validationSchma = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email formate").required("Required"),
    channel: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    // validate: validate,
    //instead of this we will use yup lib
    validationSchema: validationSchma,
  });
  console.log("formik blur", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Youtube;
