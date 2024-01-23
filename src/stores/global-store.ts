import { create } from 'zustand';

const paletteStore = create<{
  showPalette: boolean;
  setShowPalette: (show: boolean) => void;
}>()((set) => ({
  showPalette: false,
  setShowPalette: (show: boolean) => set({ showPalette: show }),
}));

export { paletteStore };
