import React from "react";
import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = ({ contact, handleDelete }) => {
  return (
    <li className={s.item}>
      <div>
        <div className={s.contact}>
          <div>
            <IoIosContact className={s.icon} />
          </div>
          <p>{contact.name}</p>
        </div>
        <div className={s.contact}>
          <div>
            <FaSquarePhone className={s.icon} />
          </div>
          <p>{contact.number}</p>
        </div>
      </div>
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
