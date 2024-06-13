// import Link from 'next/link';
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#fce9d1] min-h-screen flex flex-col">
          {<Navbar />}
        {children}
        </div>
      </body>
    </html>
  );
}
