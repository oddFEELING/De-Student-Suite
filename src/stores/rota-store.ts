import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const rota_store = create<RotaStore>()(
  persist(
    (set) => ({
      rota: null,
      set_rota: (rota_data: Rota) => set({ rota: rota_data }),
    }),
    { name: 'rota-data', storage: createJSONStorage(() => sessionStorage) }
  )
);

export { rota_store };
