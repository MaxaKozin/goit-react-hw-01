import React from 'react';
import PropTypes from 'prop-types';

import StatisticItem from './StatisticsItem';

import s from './Statistics.module.css';

const randomBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const Statistics = ({ title, statistics }) => {
  return (
    <section className={s.statistics}>
      <div>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statlist}>
          {statistics.map((prop) => (
            <StatisticItem {...prop} randomBgColor={randomBgColor} />
          ))}
        </ul>
      </div>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  prop: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
}

export default Statistics;