import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Contact, Item, List } from './ContactList.styled';

export const ContactList = ({ contactsData, onDeleteContact }) => {
  return (
    <List>
      {contactsData.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>&#8226; {`${name}: ${number}`}</Contact>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
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
