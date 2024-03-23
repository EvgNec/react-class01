import {PageTitle} from './PageTitle/PageTitle'
import {EventBoard} from './EventBoard/EventBoard'
import events from '../events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="Title main Page" />
      <EventBoard events={events} />
    </>
  );
};

