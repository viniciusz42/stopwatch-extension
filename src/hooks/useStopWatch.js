/* @flow */
/* global chrome */
/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import { useState, useEffect, useRef } from 'react';
import { isEmpty } from 'lodash';
import { INITIAL_TIMER, ICONS } from '../constants';
import 'chrome-extension-async';

type StopWatch = {
  toggle: Function,
  reset: Function,
  timer: string,
  isRunning: boolean,
  total: string,
  laps: Array
};

type Storage = {
  runs: Array,
  startTime: Date,
  clockState: boolean
};

export default function useStopWatch(): StopWatch {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [total, setTotal] = useState(INITIAL_TIMER);
  const [laps, setLaps] = useState([]);
  const interval = useRef();

  function pad(num: number): string {
    return num < 10 ? `0${num}` : num;
  }

  async function storage(): Storage {
    return chrome.storage.local.get(['clockState', 'startTime', 'runs']);
  }

  function sumRuns(durations: []): moment {
    const totalDurations = durations
      .slice(1)
      .reduce((prev, cur) => moment.duration(cur).add(prev), moment.duration(durations[0]));
    return moment.utc(totalDurations.asMilliseconds()).format('HH:mm:ss');
  }

  async function storeRuns(run: string) {
    const { runs } = await storage();
    const updatedRuns = isEmpty(runs) ? [run] : [...runs, run];
    await chrome.storage.local.set({ runs: updatedRuns });
    setLaps(updatedRuns);
    setTotal(sumRuns(updatedRuns));
  }

  function watch(startTime: Date) {
    interval.current = setInterval(() => {
      const hours = moment().diff(startTime, 'hours');
      const minutes = moment().diff(startTime, 'minutes');
      const seconds = moment().diff(startTime, 'seconds');
      const clearMinutes = minutes % 60;
      const clearSeconds = seconds % 60;
      setTimer(`${pad(hours)}:${pad(clearMinutes)}:${pad(clearSeconds)}`);
    }, 1000);
  }

  async function start() {
    const startTime = moment().toISOString();
    await chrome.storage.local.set({ clockState: true, startTime });
    await chrome.browserAction.setIcon({ path: ICONS.blueIcons });
    await chrome.browserAction.setBadgeText({ text: 'ON' });
    setIsRunning(true);
    watch(startTime);
  }

  async function stop() {
    await chrome.storage.local.set({ clockState: false, startTime: null });
    await chrome.browserAction.setBadgeText({ text: '' });
    await chrome.browserAction.setIcon({ path: ICONS.defaultIcons });
    clearInterval(interval.current);
    setTimer(INITIAL_TIMER);
    setIsRunning(false);
  }

  async function toggle() {
    const { clockState } = await storage();
    if (clockState) {
      await storeRuns(timer);
      await stop();
    } else {
      await start();
    }
  }

  async function init() {
    const { clockState, startTime, runs } = await storage();
    setLaps(runs);
    setTotal(sumRuns(runs));
    if (clockState && startTime) {
      setIsRunning(true);
      watch(startTime);
    }
  }

  async function reset() {
    await chrome.storage.local.set({ runs: [] });
    setTotal(INITIAL_TIMER);
    setLaps([]);
  }

  useEffect(() => {
    init();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return {
    toggle,
    reset,
    timer,
    isRunning,
    total,
    laps
  };
}
