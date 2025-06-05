import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className={css.headers}>
      <h2 className={css.title}> Login your account</h2>
      <LoginForm />
    </div>
  );
}
