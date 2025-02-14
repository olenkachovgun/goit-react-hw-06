import React from "react";
import Contact from "../Contact/Contact";
// import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts, add a new contact.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
