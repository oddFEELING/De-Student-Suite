import React from 'react';
import RotaList from '@/components/rota/rota-list';
import HeaderComponent from '@/components/lib/header/header';

const Rotas = () => {
  return (
    <main className='landing__page'>
      <HeaderComponent
        theme={{
          color: 'orange',
          bg_img: 'bg-rota-hero-bg',
        }}
        text={{
          title_text: [
            { text: 'Join a' },
            { main: true, text: 'Rota' },
            { text: 'today' },
          ],
          sub_title_text:
            'Pssst... Easiest way to become a hero? Say no more! Select a rota, volunteer and fly!',
          main_text_color: 'text-emerald-100',
          main_text_after: 'after:bg-emerald-600',
        }}
        buttons={{
          btn_one_text: 'How to volunteer',
          btn_two_text: 'View rotas',
          btn_two_hover_bg: 'hover:bg-emerald-600',
        }}
      />

      {/* -- rota list */}
      <RotaList />
    </main>
  );
};

export default Rotas;
