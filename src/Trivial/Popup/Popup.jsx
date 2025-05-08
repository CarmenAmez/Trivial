import { Box, Container, Inside } from './Popup.styles';
import PropTypes from 'prop-types';

const Popup = ({ visible, lost }) => (
  
  <Container visible={visible || lost}>
    <Box>
      <Inside>
        <p>{lost ? '¡ P · E · R · D · I · S · T · E !' : '¡ G · A · N · A · S · T · E !'}</p>
      </Inside>
    </Box>
  </Container>
);
Popup.propTypes = {
  visible: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
};

export default Popup;
