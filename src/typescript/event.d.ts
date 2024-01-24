type EventType = {
  _id?: string;
  title: string;
  description: string;
  image_url: string;
  location: string;
  date: {
    start: string;
    end: string;
  };
  notes?: string;
  volunteers_needed: Boolean;
  host: {
    name: string;
    contact: {
      email: string;
      phone: string;
      prefered?: string;
    };
  };
  stars?: number;
  shares?: number;
  status?: 'open' | 'closed' | 'pending';
  saves?: number;
  interested?: [userID: string];
};
