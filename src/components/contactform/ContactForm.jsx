import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(
      addContact({
        name: value.name,
        number: value.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.number) {
          errors.number = "Required phone number";
        } else if (!/^\d{3}-\d{2}-\d{2}$/.test(values.number)) {
          errors.number = "Please enter phone format 999-99-99";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.addContact}>
        <label className={css.label} htmlFor="text">
          Cantact Name:
          <Field
            type="text"
            name="name"
            placeholder="Enter contact name...."
            className={css.field}
          />
          <ErrorMessage name="name" component="span" className={css.message} />
        </label>

        <label className={css.label} htmlFor="tel">
          Phone:
          <Field
            type="tel"
            name="number"
            placeholder="Enter contact phone...."
            className={css.field}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.message}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
