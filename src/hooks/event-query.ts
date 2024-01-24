import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

//=============================================>
// ======= GET ALL EVENTS LIST -->
//=============================================>
export const useGetEventList = () => {
  const query = useQuery<CustomResponse<EventType[]>>({
    queryKey: ['get', 'all', 'event'],
    queryFn: async () => {
      try {
        const events = await axios.get('/api/events');
        return events.data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnMount: false,
  });

  return query;
};

//=============================================>
// ======= CREATE EVENTY -->
//=============================================>
export const useCreateEvent = (event_data: EventType) => {
  const query = useQuery<CustomResponse<EventType>>({
    queryKey: ['create', 'event'],
    queryFn: async () => {
      try {
        const new_event = await axios.post('/api/events', event_data);
        return new_event.data;
      } catch (error) {}
    },
    enabled: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
