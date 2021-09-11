import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: lightgray;
  &:hover {
    background: lightgray;
    color: white;
    text-decoration: none;
  }
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.cyan &&
    css`
      background: gray;
      &:hover {
        background: gray;
      }
    `}
  ${props =>
    props.blue &&
    css`
      background: gray;
      &:hover {
        background: gray;
      }
    `}  
  &:disabled {
    background: gray;
    color: gray;
    cursor: not-allowed;
    }
`;


const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? (
    <StyledLink {...props}/>
  ) : (
    <StyledButton {...props} />
  );
};


export default Button;