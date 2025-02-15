import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { deleteContact, editContact } from "../../redux/contactsSlice";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div>
        <div className={s.contact}>
          <div>
            <IoIosContact className={s.icon} />
          </div>
          <p>{name}</p>
        </div>
        <div className={s.contact}>
          <div>
            <FaSquarePhone className={s.icon} />
          </div>
          <p>{number}</p>
        </div>
      </div>
      <div className={s.contactBtn}>
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          <MdDelete />
          <span>Delete</span>
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch(
              editContact({
                id,
                name: prompt("Enter new name:"),
                number: Number(prompt("Enter new number:")),
              })
            )
          }
        >
          <FaRegEdit />
          <span>Edit</span>
        </button>
        <button
          type="button"
          // onClick={() => dispatch(deleteContact(id))}
        >
          <IoMdHeart />
          <span>Like</span>
        </button>
      </div>
    </li>
  );
};

export default Contact;
