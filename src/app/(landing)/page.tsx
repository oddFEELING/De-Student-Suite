import HeaderComponent from '@/components/lib/header/header';
import HomeFeatures from '@/components/home/home-featurtes';
import MeetBarnie from '@/components/home/meet-barnie';
import HomeTimeLine from '@/components/home/home-timeline';
import HomeEvents from '@/components/home/home-events';

export default function Home() {
  const theme_color = 'violet';
  return (
    <main className='landing__page'>
      {/* -- Hero section */}
      <HeaderComponent
        text={{
          title_text: [
            { text: 'De' },
            { main: true, text: 'Student' },
            { text: 'Suite' },
          ],
          sub_title_text:
            'Just a simple site built in an attempt to optimize student work and manage student events.',
          main_text_after: `after:bg-violet-600`,
          main_text_color: `text-violet-200`,
        }}
        buttons={{
          btn_one_text: 'What can I do here?',
          btn_two_text: 'Rotas',
          btn_one_border: 'border-violet-300',
          btn_two_hover_bg: 'hover:bg-violet-600',
        }}
        theme={{ color: 'violet', bg_img: 'bg-landing-bg', title_blend: true }}
      />

      {/* -- features section */}
      <HomeFeatures />

      {/* -- Meet Barnie */}
      <MeetBarnie />

      {/* -- TIMELINE SECTION */}
      <HomeTimeLine />

      {/* -- EVENT SECTION */}
      <HomeEvents />
    </main>
  );
}
