import { Event, EventName, Info, Chip, Chip2 } from "./EventCard2.styled";
import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "../../utils";
import { iconSize } from "../../constans";

export const EventCard2 = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const formattedDuration = formatEventDuration(start, end);
  return (
    <Event>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt  size={iconSize.sm} color="red" />
        {location}
      </Info>
      <Info>
        <FaUserAlt  size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock  size={iconSize.sm} />
        {formattedDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
      <Chip2 eventType={type}>{type}</Chip2>
    </Event>
  );
};

EventCard2.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
