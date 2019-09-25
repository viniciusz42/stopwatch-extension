import styled from 'styled-components';
import { theme } from 'assets';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.bgColor};
`;

export const StopWatch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 0;
`;

export const ButtonArea = styled.div`
  padding: 20px;
  text-align: right;
`;
