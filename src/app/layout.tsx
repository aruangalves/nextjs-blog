import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Blog - This is a blog built with Next.js',
  description: 'A blog application created with Next.js',
};

//this page defines the layout for the entire application
//it's interesting to provide common components here like a page header or footer, for example
//OPTIONAL: you can define separate layout pages for each route, all the children components will inherit their parents' layouts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
