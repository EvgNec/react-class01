import css from "./EventCard.module.css";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart } from '../../utils/formatEventStart';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
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
        Duration
      </p>
      {/* <span class="chip free|paid|vip">Event types</span> */}
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
