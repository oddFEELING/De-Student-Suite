import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const user_store = create<UserStoreSchema>()(
  persist(
    (set) => ({
      user: null,
      set_user: (user_data: User) => set({ user: user_data }),
    }),
    { name: 'user-data' }
  )
);

export { user_store };
