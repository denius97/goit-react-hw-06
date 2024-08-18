import css from "./Contact.module.css";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.info}>
        <span>
          <AiOutlineUser />
          {contact.name}
        </span>
        <span>
          <AiOutlinePhone />
          {contact.number}
        </span>
      </div>
      <button
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
