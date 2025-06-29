'use client'; // only if you're using App Router and need interactivity

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 left- bg-white shadow-sm ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-black">DEVL</span>
        <span className="text-black">OP.ME</span>
      </div>

      {/* Nav Links */}
      <nav className="flex space-x-8 text-lg text-black font-medium">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500 transition">
          About
        </Link>
        <Link href="/portfolio" className="hover:text-blue-500 transition">
          Portfolio
        </Link>
        <Link href="/blog" className="hover:text-blue-500 transition">
          Blog
        </Link>
      </nav>

      {/* Start Project Button with Tooltip */}
      <div className="relative group">
        <button className="flex items-center border border-black px-4 py-2 rounded-full text-black transition">
          <ArrowRight className="mr-2 h-5 w-5" />
          Start Project
        </button>
      </div>
    </header>
  );
}
