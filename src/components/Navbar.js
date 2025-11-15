'use client';
import Link from 'next/link';
import { Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/20 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo cliquable */}
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-pink-300 animate-pulse" />
          <span className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Rotaract Salé Bab Lamrissa
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-semibold">
          <Link href="/" className="hover:text-pink-400 transition-colors">Accueil</Link>
          <Link href="/about" className="hover:text-pink-400 transition-colors">À propos</Link>
          <Link href="/team" className="hover:text-pink-400 transition-colors">Équipe</Link>
          <Link href="/join" className="hover:text-pink-400 transition-colors">Devenir membre</Link>
          <Link href="/contact" className="hover:text-pink-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-white/30 transition">
            <Menu className="w-6 h-6 text-pink-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-2xl border-t border-white/20 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 font-semibold">
            <li><Link href="/" className="hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link href="/about" className="hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>À propos</Link></li>
            <li><Link href="/team" className="hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Équipe</Link></li>
            <li><Link href="/join" className="hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Devenir membre</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
 