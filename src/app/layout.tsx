'use client';

import '@styles/globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { paletteStore } from '@/stores/global-store';
import BarnieCmdPalette from '@lib/cmd-palettes/barnie-commands';
import PaletteButton from '@/components/lib/cmd-palettes/palette-btn';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showPalette, setShowPalette } = paletteStore();
  const queryClient = new QueryClient();

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <html lang='en' className='h-full'>
          <Script src='https://cdn.lordicon.com/lordicon.js' />
          <body className={`${inter.className} h-full`}>
            <BarnieCmdPalette open={showPalette} setOpen={setShowPalette} />
            {children}
            <PaletteButton />
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition='bottom-left'
            />
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
