'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        <ul className="hidden md:flex gap-6">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="#about" className="nav-link">About</Link></li>
          <li><Link href="#work" className="nav-link">Projects</Link></li>
          <li><Link href="#contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
