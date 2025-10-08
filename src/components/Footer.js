'use client';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-pink-50 backdrop-blur-xl border-t border-pink-100 overflow-hidden pt-20 pb-10">
      
      {/* Blobs décoratifs plus doux */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Contenu du footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-gray-700">
        
        {/* Logo & Slogan */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Rotaract Salé Bab Lamrissa
          </h2>
          <p className="text-gray-600">
            Rejoignez une communauté de jeunes leaders passionnés, engagés pour un monde meilleur.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-pink-600">Liens utiles</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-pink-500 transition-colors">Accueil</Link></li>
            <li><Link href="/about" className="hover:text-pink-500 transition-colors">À propos</Link></li>
            <li><Link href="/team" className="hover:text-pink-500 transition-colors">Équipe</Link></li>
            <li><Link href="/join" className="hover:text-pink-500 transition-colors">Devenir membre</Link></li>
            <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-pink-600">Suivez-nous</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 rounded-full bg-white shadow hover:bg-pink-100 transition-colors">
              <Facebook className="w-5 h-5 text-pink-500" />
            </a>

            <a 
              href="https://www.instagram.com/rotaract.sale.bab.lamrissa?igsh=MWg2bDJhY2cyd3pyeQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow hover:bg-pink-100 transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>

            <a href="#" className="p-3 rounded-full bg-white shadow hover:bg-pink-100 transition-colors">
              <Linkedin className="w-5 h-5 text-pink-500" />
            </a>

            <a href="#" className="p-3 rounded-full bg-white shadow hover:bg-pink-100 transition-colors">
              <Twitter className="w-5 h-5 text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rotaract Salé Bab Lamrissa | Tous droits réservés par <span className="text-pink-500 font-medium">EL KHYARI Ilyas</span>.
      </div>

      {/* Animations blobs */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </footer>
  );
}
