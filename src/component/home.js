import { useState } from 'react';
import '../style/home.css';

import Aside from './aside.js';
import Background from './background.js';
import Add from './add';

// moment 라이브러리 사용
import moment from 'moment';

const Home = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  let [add, setAdd] = useState(false);

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className='day' key={week}> {
          Array(7).fill(0).map((data, index) => {
            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

            // 날짜가 오늘이면 #4FD0FE
            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
              return (
                <td className='today' style={{ backgroundColor: '#FFF', color: '#5F5F5F' }} key={index}>
                  <span>{days.format('D')}</span>
                </td>
              );
              // 그 달의 날짜가 아니면 #EBEBEB
            } else if (days.format('MM') !== today.format('MM')) {
              return (
                <td key={index} style={{ backgroundColor: '#EBEBEB', color: '#AFAFAF' }} >
                  <span>{days.format('D')}</span>
                </td>
              );
              // 둘 다 아니면 #FFF
            } else {
              return (
                <td key={index} style={{ backgroundColor: '#FFF', color: '#5F5F5F' }}>
                  <span>{days.format('D')}</span>
                </td>
              );
            }
          })
        } </tr>);
    }
    return result;
  }

  // 월 영어로
  const eng_month = (num_month) => {
    const month = [
      'January', 'February',
      'March', 'April',
      'May', 'June',
      'July', 'August',
      'September', 'October',
      'November', 'December'
    ];

    return month[num_month];
  }

  return (
    <div className="Home">
      {
        add == true ? <Add /> : null
      }

      <div className='calender'>
        <nav className='head'>
          {/* 월 */}
          <div className='month'>
            <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >{'<'}</button>
            <h2>{eng_month(today.month())} {today.format('YYYY')}</h2>
            <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >{'>'}</button>
          </div>

          {/* 일정 추가 버튼 */}
          <button className='add_button' onClick={() => setAdd(!add)}>
            Add
          </button>
        </nav>

        {/* 요일 */}
        <div className="dayOfweek">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((el) => (
            <div className='dayOfweek_box' key={el}>
              <span className='text'>{el}</span>
            </div>
          ))}
        </div>

        {/* 달력 */}
        <table className='body'>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
      </div>

      <Aside />
      <Background />
    </div>
  );
}

export default Home;