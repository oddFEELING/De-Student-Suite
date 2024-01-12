// ======= profile picture data  -->
// *** Policy. To ease the management of the kind of media that is transfered on the platform, profile images can poonly be selectyed as oposed to being uploaded.
type ProfileImageType = {
  id: string;
  source: string;
  category: string;
};

// ======= user account -->
type UserType = {
  name: string;
  church: string;
  stars: number;
  school: string;
  profile_image: string;
  contact: { email?: string; phone: string; prefered: 'phone' | 'email' };
};

// ======= story schema -->
type StoryGenType = {
  title: string;
  story: string;
  date_generated: Date;
  status: 'public' | 'private';
  community: {
    stars: number;
    comments: [{ user: string; date: Date; content: string }];
    saves: number;
    issues: { count: number; description: string };
  };
};

// ======= Rota Schema -->
type RotaSchema = {
  _id: string;
  rota_name: string;
  rota_description: string;
  created: string;
  status: 'open' | 'closed';
  dates: [
    {
      date: string;
      shifts: [string];
      need_count: number;
      available: Boolean;
      people: {
        pending: [string] | null | undefined;
        approved: [string] | null | undefined;
        declined: [string] | null | undefined;
      };
    }
  ];
  activity_feed: [
    {
      date: string;
      agent: string;
      target: string;
      type: 'info' | 'success' | 'error' | 'warn';
      event:
        | 'showed interest in'
        | 'denied interest for'
        | 'is now on shift for'
        | 'is filled at this time';
    }
  ];
};

// ======= Event schema -->
type EventSchema = {
  title: string;
  description: string;
  location: string;
  date: Date;
  notes: string;
  volunteers_neded: Boolean;
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
  saves: number;
  interested: [userID: string];
};

const stats_to_watch: string[] = [
  'user count',
  'story count',
  'Student cont',
  'unique churches count',
  'unique schoopl count',
  'non students count',
  'Events counts',
];
