import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'assets';
import { Button, StartStop, TimeMarker, RunList } from 'components';
import { useStopWatch } from 'hooks';
import { isEmpty } from 'lodash';
import { Container, StopWatch, ButtonArea } from './styled';

function Extension() {
  const { toggle, reset, timer, isRunning, total, laps } = useStopWatch();
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <StopWatch>
          <StartStop playerState={isRunning} onClick={toggle} size="lg" />
          <TimeMarker clock={timer} size="lg" />
        </StopWatch>
        {!isEmpty(laps) && (
          <Fragment>
            <RunList runs={laps} total={total} />
            <ButtonArea>
              <Button text="Reset" onClick={reset} />
            </ButtonArea>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}

ReactDOM.render(<Extension />, document.getElementById('root'));
