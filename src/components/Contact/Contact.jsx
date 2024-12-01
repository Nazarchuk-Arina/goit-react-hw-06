import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={s.contact}>
      <div className={s.contact__both}>
        <div className={s.contact__name}>
          <IoPersonSharp />
          <p>{data.name}</p>
        </div>
        <div className={s.contact__number}>
          <FaPhone />
          <p>{data.number}</p>
        </div>
      </div>
      <button className={s.contact__btn} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
