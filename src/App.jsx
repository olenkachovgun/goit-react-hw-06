import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox ";
import ContactList from "./components/ContactList/ContactList";
const contactsInitial = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return contactsInitial;
  });
  const [filter, setfilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    setfilter(e.target.value.toLowerCase());
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim())
  );
  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };
  console.log(contacts);
  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  const reset = () => {
    setContacts(contactsInitial);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList contacts={filterContacts} handleDelete={handleDelete} />
      {contacts.length === 0 && (
        <button onClick={reset} type="button" className="btnReset">
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
