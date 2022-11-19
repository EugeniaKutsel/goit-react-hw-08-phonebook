import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Container from "components/Container/Container";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contactsOperations";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/contactsSelectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length === 0 ?
        <p>Sorry, there are no contacts in the phonebook yet.</p> :
        <ContactList />}
    </Container>
  );
}

export default Contacts;