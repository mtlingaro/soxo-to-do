import Container from '@mui/material/Container';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import '@styles/globals.css';

import { ClientThemeProvider } from '@components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToDo List',
  description: 'A simple ToDo List app built with Next.js and React 19',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientThemeProvider>
          <Container maxWidth="sm" sx={{ py: 4 }}>
            {children}
          </Container>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
