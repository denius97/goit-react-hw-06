import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";

import "./App.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("savedContacts")
    );
    return savedContacts ? savedContacts : initialContacts;
  });
  const [searchValue, setSerchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, { id: nanoid(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter(({ name, number }) => {
    return (
      name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      number.includes(searchValue)
    );
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchValue} onSearch={setSerchValue} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
