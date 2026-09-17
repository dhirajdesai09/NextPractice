import './globals.css';

export const metadata = {
  title: 'Simple Next App',
  description: 'A minimal Next.js frontend and backend example.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
