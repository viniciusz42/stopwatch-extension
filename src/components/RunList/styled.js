import styled from 'styled-components';
import { theme } from 'assets';

export const Row = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  width: 80%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  cursor: default;
`;

export const LeftCol = styled.div`
  font-family: ${theme.roboto};
  color: ${theme.fontColor};
  font-weight: 400;
  font-size: 14px;
`;

export const RightCol = styled.div`
  margin-left: auto;
  font-family: ${theme.roboto};
  color: ${theme.fontColor};
  font-weight: 500;
  font-size: 14px;
`;
