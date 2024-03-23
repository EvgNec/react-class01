import {PageTitle} from './PageTitle/PageTitle'
import {EventBoard} from './EventBoard/EventBoard'
import events from '../events.json'

export const App = () => {
  return (
    <div>
      <PageTitle text="Title main Page" />
      <EventBoard events={events} />
    </div>
  );
};

