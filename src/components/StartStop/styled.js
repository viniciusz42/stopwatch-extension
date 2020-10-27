import styled from 'styled-components';
import { theme } from 'assets';
import { isEqual } from 'lodash';

export const Wrapper = styled.div`
  width: ${props => (props.width ? props.width : '45%')};
  display: flex;
  align-items: center;
  justify-content: center;
  aling-self: center;
`;

export const Circle = styled.div`
  width: ${props => (isEqual(props.size, 'sm') ? '30px' : '70px')};
  height: ${props => (isEqual(props.size, 'sm') ? '30px' : '70px')};
  border-radius: 50%;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  box-sizing: border-box;
  width: 0;
  height: ${props => (isEqual(props.size, 'sm') ? '10px' : '30px')};
  border-color: transparent transparent transparent ${theme.primaryColor};
  transition: 100ms all ease;
  cursor: pointer;
  border-style: double;
  border-width: ${props => (isEqual(props.size, 'sm') ? '0px 0 0px 10px' : '0px 0 0px 25px')};
`;

export const StartStopWrapper = styled.input`
  position: absolute;
  left: -9999px;
  &:checked + ${Label} {
    border-style: solid;
    border-width: ${props => (isEqual(props.size, 'sm') ? '7px 0 7px 10px' : '17px 0 17px 30px')};
    margin-left: ${props => (isEqual(props.size, 'sm') ? '3px' : '7px')};
  }
`;
