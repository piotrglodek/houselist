import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => Promise<void>;
}

const StyledBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 0.4rem;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  color: rgb(255, 255, 255);
  background-color: #e64343;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
`;

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
};
