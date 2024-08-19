import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { selectContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const searchValue = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const visibleContacts = contacts.filter(({ name, number }) => {
    return (
      name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      number.includes(searchValue)
    );
  });
  return (
    <div className={css.contactList}>
      {visibleContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

export default ContactList;
