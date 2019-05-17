import styled from 'styled-components';
import { theme } from 'assets';

export const ButtonWrapper = styled.button`
  background: ${theme.primaryColor};
  font-family: ${theme.roboto};
  font-weight: 500;
  color: ${theme.black};
  font-size: 16px;
  padding: 10px 22px;
  text-transform: uppercase;
  border-radius: 20px;
  cursor: pointer;
`;
