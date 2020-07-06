import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, statistics }) => {
  const randomBgColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return (
    <section className={styles.statistics}>
      <div>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statlist}>
          {statistics.map(prop => (
            <li className={styles.item} key={prop.id} style={{ backgroundColor: randomBgColor() }}>
              <span className={styles.label}>{prop.label}</span>
              <span className={styles.percentage}>{prop.percentage}%</span>
            </li>
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