import ContactDetails from '@/components/contact/contact-details';
import HeaderComponent from '@/components/lib/header/header';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className='landing__page'>
      {/* -- Hero section */}
      <HeaderComponent
        text={{
          title_text: [{ text: 'Tell us your' }, { main: true, text: 'Mind' }],
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
        theme={{
          color: 'violet',
          bg_img: 'bg-contact-hero-bg',
          title_blend: true,
        }}
      />

      {/* -- CONTACT DETAILS SECTION */}
      <ContactDetails />
    </main>
  );
};

export default ContactPage;
