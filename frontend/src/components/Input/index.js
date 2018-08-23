import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  min-width: 350px;
  font-size: 16px;
`;

const InputGroup = ({ placeholder }) => (
  <Input type="text" placeholder={placeholder} />
);

InputGroup.defaultProps = {
  placeholder: '..do you have anything interesting to say?',
};

InputGroup.propTypes = {
  placeholder: PropTypes.string,
};

export default InputGroup;
