import css from "./Contact.module.css";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
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
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
