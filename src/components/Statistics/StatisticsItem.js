import React from 'react';

import s from './Statistics.module.css';

const StatisticItem = ({ id, label, percentage, randomBgColor }) => {
  return (
    <li className={s.item} key={id} style={{ backgroundColor: randomBgColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticItem;