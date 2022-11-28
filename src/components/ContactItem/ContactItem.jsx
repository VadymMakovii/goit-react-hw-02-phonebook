import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Contact } from './ContactItem.styled';

export const ContactItem = ({ name, number, onClick }) => {
  return (
    <Item>
      <Contact>&#8226; {`${name}: ${number}`}</Contact>
      <Button onClick={onClick}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
