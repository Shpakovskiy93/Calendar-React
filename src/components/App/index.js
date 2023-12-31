import moment from 'moment';
import styled  from 'styled-components';
import { useEffect, useState } from 'react';

import {Header} from '../Header';
import {Monitor} from '../Monitor';
import {CalendarGrid} from '../CalendarGrid';

const ShadowWrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 1px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

const URL = 'http://localhost:5000';
const TOTALDAYS = 42;

function App() {

  moment.updateLocale('en', {week: {dow: 1}});
  // const today = moment();
  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf('month').startOf('week');

  window.moment = moment;

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const [events, setEvents] = useState([]);
  const startDateQuery = startDay.clone().format('X');
  const endDateQuery = startDay.clone().add(TOTALDAYS, 'days').format('X');
  useEffect(() => {
    fetch(`${URL}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setEvents(res);
      })
    ;
  }, [])

  return (
    <ShadowWrapper>
      <Header />
      <Monitor 
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} today={today} totalDays={TOTALDAYS} />
    </ShadowWrapper>
  );
}

export default App;
