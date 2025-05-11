import { ReactNode } from 'react';
import '../styles/globals.css';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1e0338] text-white font-sans">{children}</body>
    </html>
  );
}