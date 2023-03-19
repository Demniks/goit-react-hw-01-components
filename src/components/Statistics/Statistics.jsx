import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase() +
    '80'
  );
};

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* {title ? title : <h2 className={css.title}>{title}</h2>} */}
      <ul className={css.stat_list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: randColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
