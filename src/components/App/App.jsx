import { PageTitle } from '../PageTitle/PageTitle'
import { EventBoard } from '../EventBoard/EventBoard'
import {PageTitle2} from '../PageTitle2/PageTitle2'
import {EventBoard2} from '../EventBoard2/EventBoard2'
import events from '../../events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="Title main Page" />
      <EventBoard events={events} />
      <PageTitle2 text="Title main Page" />
      <EventBoard2 events={events} />
    </>
  );
};

