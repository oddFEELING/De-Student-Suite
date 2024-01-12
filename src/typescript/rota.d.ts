// ======= Rota Schema -->
type Rota = {
  _id: string;
  rota_name: string;
  rota_description: string;
  created: string;
  icon_url: string;
  status: 'open' | 'closed';
  dates: {
    date: string;
    shifts: string[];
    need_count: number;
    available: Boolean;
    people: {
      pending: [string] | null | undefined;
      approved: [string] | null | undefined;
      declined: [string] | null | undefined;
    };
  }[];
  activity_feed: {
    date: string;
    agent: string;
    target: string;
    type: 'info' | 'success' | 'error' | 'warn';
    event:
      | 'showed interest in'
      | 'denied interest for'
      | 'is now on shift for'
      | 'is filled at this time';
  }[];
};

type RotaStore = {
  rota: Rota | null;
  set_rota: (rota_data: Rota) => void;
};
