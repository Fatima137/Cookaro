"use client";


import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

