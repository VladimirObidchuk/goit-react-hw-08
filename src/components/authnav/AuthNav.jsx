import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const getActiveLinckClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  return (
    <div className={css.authMenu}>
      <NavLink to="/register" className={getActiveLinckClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getActiveLinckClass}>
        Log in
      </NavLink>
    </div>
  );
}
