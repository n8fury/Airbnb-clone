import { Analytics } from '@vercel/analytics/react';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb-clone by next.js',
  content: 'nGVM0iXqB439f-HiPJPIbfkzy9n33-JVzB3mdk6ojFE',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
