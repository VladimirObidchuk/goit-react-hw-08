import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email || !values.name || !values.password) {
          errors.email = "Required email";
          errors.name = "Required name";
          errors.password = "Required password";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
          <Field type="name" name="name" className={css.input} />
        </label>
        <ErrorMessage name="name" component="span" className={css.message} />
        <label className={css.label} htmlFor="email">
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <ErrorMessage name="email" component="span" className={css.message} />
        <label className={css.label} htmlFor="email">
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <ErrorMessage name="password" component="span" className={css.span} />
        <button type="submit" className={css.btnSubmit}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
