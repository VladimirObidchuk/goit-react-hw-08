import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
