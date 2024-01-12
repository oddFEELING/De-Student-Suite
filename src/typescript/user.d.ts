type User = {
  name: string;
  church: string;
  stars: number;
  school: string;
  profile_image: string;
  contact: { email?: string; phone: string; prefered: 'phone' | 'email' };
};

type UserStoreSchema = {
  user: User | null;
  set_user: (user_data: User) => void;
};
