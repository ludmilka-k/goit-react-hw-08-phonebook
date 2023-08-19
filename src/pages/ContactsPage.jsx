import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import {Section} from '../components/Section'
import { fetchContactsThunk } from '../redux/contacts/operations';
import {selectIsLoading, selectError } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [ dispatch]);
  return (
    <>
    <Section title="Phonebook">
      <ContactForm />
    </Section>
    <Section title="Contacts">
      <Filter />
      <ContactList />
      {isLoading && !error && <p>Loading contacts...</p>}
    </Section>
    </>
  );
};

export default ContactsPage;
