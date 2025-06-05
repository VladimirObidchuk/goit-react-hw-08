import { useDispatch, useSelector } from "react-redux";
import css from "./ContactPage.module.css";
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/searchbox/SearchBox";
import ContactList from "../../components/contactlist/ContactList";
import ContactForm from "../../components/contactform/ContactForm";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <title className={css.title}>Your contacts</title>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </div>
  );
}
