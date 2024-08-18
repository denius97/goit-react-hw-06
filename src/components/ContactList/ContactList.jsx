import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            deleteContact={deleteContact}
            key={contact.id}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
