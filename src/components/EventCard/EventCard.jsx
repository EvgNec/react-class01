import css from "./EventCard.module.css";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart,  formatEventDuration } from '../../utils';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const formattedDuration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
              <FaMapMarkerAlt className={css.icon} size={16} color="red"/>
              {location}
      </p>
      <p className={css.info}>
        <FaUserAlt />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock />
        {formattedDuration}
      </p>
      <span class={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
