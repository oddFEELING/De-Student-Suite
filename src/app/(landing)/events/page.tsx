import HeaderComponent from '@/components/lib/header/header';
import React from 'react';

const EventsPage = () => {
  return (
    <main className='landing__page'>
      <HeaderComponent
        theme={{
          color: 'cyan',
          bg_img: 'bg-event-hero-bg',
          title_blend: true,
        }}
        text={{
          title_text: [
            { text: 'De' },
            { main: true, text: 'Event' },
            { text: 'Center' },
          ],
          sub_title_text:
            "Mr Krabs: Ye get to be part of a bustling community of students, engaging in events that'll keep ye tethered! Argh!+",
          main_text_color: 'text-amber-200',
          main_text_after: 'after:bg-amber-600',
        }}
        buttons={{
          btn_one_text: 'How to volunteer',
          btn_two_text: 'View rotas',
          btn_two_hover_bg: 'hover:bg-amber-700',
        }}
      />
    </main>
  );
};

export default EventsPage;
