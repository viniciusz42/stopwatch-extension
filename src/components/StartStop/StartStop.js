// @flow
import React, { useState, useEffect } from 'react';
import { Circle, Wrapper, StartStopWrapper, Label } from './styled';

type Props = {
  playerState: Boolean,
  onClick: Function,
  size: 'sm' | 'lg'
};

export default function StartStop({ playerState, onClick, size }: Props) {
  const [isRunning, setIsRunning] = useState(!playerState);
  useEffect(() => {
    setIsRunning(!playerState);
  }, [playerState]);

  function toggleState() {
    setIsRunning(isRunning);
    onClick();
  }

  return (
    <Wrapper>
      <Circle onClick={toggleState} size={size}>
        <StartStopWrapper type="checkbox" id="startStop" checked={isRunning} size={size} disabled />
        <Label htmlFor="startStop" size={size} />
      </Circle>
    </Wrapper>
  );
}
