import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  width: 100px;
`;

const ButtonGroup = ({ title }) => (
  <Button type="submit">{title}</Button>
);

ButtonGroup.defaultProps = {
  title: 'Say it!',
};

ButtonGroup.propTypes = {
  title: PropTypes.string,
};

export default ButtonGroup;
