type EventType = {
  title: string;
  description: string;
  location: string;
  date: Date;
  notes: string;
  volunteers_needed: Boolean;
  host: {
    name: string;
    contact: {
      email: string;
      phone: string;
      prefered: string;
    };
  };
  stars: number;
  shares: number;
  status: 'open' | 'closed' | 'pending';
  saves: number;
  interested: [userID: string];
};
