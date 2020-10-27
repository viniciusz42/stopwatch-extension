// @flow
import React, { Fragment, useState, useEffect } from 'react';
import { Row, LeftCol, RightCol } from './styled';

type Props = {
  runs: Array,
  total: string
};

export default function RunList({ runs, total }: Props) {
  const [todayRuns, setTodayRuns] = useState([]);
  useEffect(() => {
    setTodayRuns(runs);
  }, [runs]);

  return (
    <Fragment>
      {todayRuns.map((run, index) => (
        <Row key={run}>
          <LeftCol>{`Lap ${index + 1}`}</LeftCol>
          <RightCol>{run}</RightCol>
        </Row>
      ))}
      <Row>
        <LeftCol>Total</LeftCol>
        <RightCol>{total}</RightCol>
      </Row>
    </Fragment>
  );
}
