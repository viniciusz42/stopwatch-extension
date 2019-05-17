import styled from 'styled-components';
import { theme } from 'assets';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${props => (props.width ? props.width : '55%')};
  aling-self: center;
`;

export const TimeWrapper = styled.div`
  align-self: center;
  text-align: left;
  font-family: ${theme.roboto};
  font-weight: bold;
  font-size: ${props => (props.size === 'sm' ? '15px' : '30px')};
  color: ${theme.fontColor};
  cursor: default;
`;
