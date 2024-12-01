import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={s.contact__list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
