import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox ";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />

      {contacts.length === 0 && (
        <button
          onClick={() => dispatch(reset())}
          type="button"
          className="btnReset"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
