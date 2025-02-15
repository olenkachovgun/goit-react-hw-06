import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters);
  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <ul>
      {filterData.map((item) => (
        <Contact key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default ContactList;
