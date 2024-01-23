import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetEventList = () => {
  const query = useQuery({
    queryKey: ['get', 'all', 'events'],
    queryFn: async () => {
      try {
        const events = await axios.get('/api/events');
        return events.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return query;
};
