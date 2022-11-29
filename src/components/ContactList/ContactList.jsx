import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contactsData, onDeleteContact }) => {
  return (
    <List>
      {contactsData.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
