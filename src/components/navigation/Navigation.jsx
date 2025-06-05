import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getActiveLinckClass = ({ isActive }) => {
    return clsx(css.title, isActive && css.isActive);
  };

  return (
    <nav className={css.nav}>
      <NavLink className={getActiveLinckClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getActiveLinckClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
