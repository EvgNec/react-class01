import { EventCard2 } from "../EventCard2/EventCard2";
import PropTypes from "prop-types";
import { EventBoard } from './EventBoard2.styled';

export const EventBoard2 = ({ events }) => {
  return (
    <EventBoard>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCard2
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </EventBoard>
  );
};

EventBoard2.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
