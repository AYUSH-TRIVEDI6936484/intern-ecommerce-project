import Header from '../components/header';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[var(--o-july-background)] min-h-screen flex flex-col">
          {<Header />}
          {children}
        </div>
      </body>
    </html>
  );
}
