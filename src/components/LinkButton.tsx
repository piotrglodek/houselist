import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  background: transparent;
  outline: none;
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

export const LinkButton: FC<Props> = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};
