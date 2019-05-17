// @flow
import React, { useState, useEffect } from 'react';
import { INITIAL_TIMER } from '../../constants';
import { TimeWrapper, Wrapper } from './styled';

type Props = {
  clock: string,
  size: 'sm' | 'lg'
};

export default function TimeMarker({ clock, size }: Props) {
  const [timer, setTimer] = useState(INITIAL_TIMER);
  useEffect(() => setTimer(clock), [clock]);

  return (
    <Wrapper>
      <TimeWrapper size={size}>{timer}</TimeWrapper>
    </Wrapper>
  );
}
