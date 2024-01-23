'use client';
import React from 'react';
import { useUser } from '@clerk/nextjs';
import HeaderComponent from '@/components/lib/header/header';
import EventList from '@/components/events/event-list';

const EventsPage = () => {
  const { user } = useUser();
  // const user = await currentUser();

  if (user) {
    console.log(user);
    // console.log(user);
  }

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

      <EventList />
      <div className='h-max w-full flex items-center justify-center py-14'></div>
    </main>
  );
};
export default EventsPage;
