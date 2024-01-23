type User = {
  personal: {
    first_name: string;
    last_name: string;
    password_enabled: boolean;
    password?: string;
    profile_image: string;
    clerk_id: String;
    contact?: {
      email?: string[];
      phone?: string[];
      prefered: 'phone' | 'email';
    };
    role?: 'user' | 'creator' | 'admin' | 'super-admin';
  };
  activity?: {
    stars: number;
    church: string;
    saves?: {
      rotas: string[];
      events: string[];
      stories: string[];
    };
  };
  student?: {
    is_student: boolean;
    school: string;
  };
};

type UserStoreSchema = {
  user: User | null;
  set_user: (user_data: User) => void;
};
