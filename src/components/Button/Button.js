// @flow
import React from 'react';
import { ButtonWrapper } from './styled';

type Props = {
  onClick: Function,
  text: String
};

export default function Button({ onClick, text }: Props) {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}
