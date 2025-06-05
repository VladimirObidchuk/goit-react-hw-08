import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispath = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcom, {user.name}</p>
      <button
        type="button"
        onClick={() => dispath(logOut())}
        className={css.btn}
      >
        Logout
      </button>
    </div>
  );
}
