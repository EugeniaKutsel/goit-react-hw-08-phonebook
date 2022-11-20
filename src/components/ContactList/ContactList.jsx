import React from "react";
import PropTypes from 'prop-types';
import css from "../ContactList/ContactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/contactsOperations";
import { selectFilteredContacts } from "redux/contacts/contactsSelectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul className={css.contacts}>
      {contacts.map(({id, name, number}) =>
      <li key={id} className={css.contacts__item}>
          <p className={css.contacts__name}>{name}:
          <span> {number}</span>
          <button onClick={() => dispatch(deleteContact(id))} className={css.deleteButton}>Delete</button>
        </p>
      </li>
      )}</ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}

export default ContactList;