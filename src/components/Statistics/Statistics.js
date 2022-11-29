import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2>{title}</h2>
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span style={{ paddingBottom: 10 }}>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
