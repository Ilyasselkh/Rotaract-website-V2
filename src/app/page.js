"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Target, Lightbulb, ArrowRight, Sparkles, Globe } from 'lucide-react';

export default function RotaractHome() {
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [floatingCardVisible, setFloatingCardVisible] = useState(false);
  const statsRef = useRef(null);
  const floatingCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFloatingCardVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (floatingCardRef.current) {
      observer.observe(floatingCardRef.current);
    }

    return () => {
      if (floatingCardRef.current) {
        observer.unobserve(floatingCardRef.current);
      }
    };
  }, []);

  // Hook pour animer les nombres
  const useCountUp = (end, duration = 2000, start = 0, shouldStart = false) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function pour un effet plus naturel
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const currentCount = Math.floor(easeOutQuart * (end - start) + start);
        
        setCount(currentCount);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, start, shouldStart]);

    return count;
  };

  const projectsCount = useCountUp(50, 2000, 0, statsVisible);
  const countriesCount = useCountUp(15, 2000, 0, statsVisible);
  const beneficiariesCount = useCountUp(10000, 2500, 0, statsVisible);
  const membersCount = useCountUp(500, 2000, 0, floatingCardVisible);

  const missions = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Service Communautaire",
      description: "Nous nous engageons à améliorer la vie dans nos communautés à travers des projets significatifs.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Développement du Leadership",
      description: "Former les jeunes leaders de demain à travers des opportunités de croissance personnelle et professionnelle.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Action Internationale",
      description: "Participer à des initiatives mondiales pour créer un impact positif au-delà des frontières.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation Sociale",
      description: "Développer des solutions créatives aux défis sociaux de notre époque.",
      color: "from-amber-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Video Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 z-10"></div>
        
        <div className="w-full h-full relative">
          <iframe
            className="w-full h-full object-cover scale-105"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Rotaract Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <div className="animate-fade-in-up" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <div className="flex items-center gap-3 mb-6 backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-pink-200" />
              <span className="text-white font-medium">Bienvenue chez Rotaract</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
              ROT<span className="text-pink-300">A</span>RACT
            </h1>
            
            <p className="text-2xl md:text-4xl text-white/90 font-light mb-12 text-center max-w-3xl">
              Ensemble pour un monde <span className="text-pink-300 font-semibold">meilleur</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
      <Link href="/about">
        <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
          Découvrir
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
      <Link href="/join">
      <button className="px-8 py-4 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105">
        Nous Rejoindre
      </button>
      </Link>
    </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Quote Section with Glassmorphism */}
      <div className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50"></div>
            <div className="relative z-10">
              <Globe className="w-16 h-16 text-pink-400 mx-auto mb-8 animate-pulse" />
              <p className="text-3xl md:text-5xl font-light text-gray-800 text-center leading-relaxed mb-6">
                &quot;Le service au-dessus de soi-même n&apos;est pas juste notre devise,
                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> c&apos;est notre mode de vie</span>&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Modern Layout */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with Creative Layout */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop"
                  alt="Rotaract Team"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Card */}
              <div ref={floatingCardRef} className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{membersCount}+</p>
                    <p className="text-sm text-gray-600">Membres Actifs</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full opacity-50 blur-2xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
                <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">QUI SOMMES-NOUS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Des jeunes <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">passionnés</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Le Rotaract est une organisation mondiale de jeunes leaders passionnés par le service communautaire 
                et le développement personnel. Nous rassemblons des jeunes de 18 à 30 ans qui partagent une vision 
                commune : créer un impact positif dans nos communautés et à travers le monde.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Chaque projet, chaque initiative est une opportunité de grandir, d&apos;apprendre et de faire la différence. 
                Rejoignez-nous dans cette aventure extraordinaire où l&apos;amitié, le leadership et le service 
                se rencontrent pour transformer des vies.
              </p>
              
              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{projectsCount}+</p>
                  <p className="text-sm text-gray-600 mt-1">Projets</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{countriesCount}+</p>
                  <p className="text-sm text-gray-600 mt-1">Pays</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{beneficiariesCount > 1000 ? `${Math.floor(beneficiariesCount / 1000)}k` : beneficiariesCount}+</p>
                  <p className="text-sm text-gray-600 mt-1">Bénéficiaires</p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                  Contactez-nous
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-pink-300 text-pink-600 font-bold rounded-full transition-all duration-300 hover:bg-pink-50 hover:scale-105">
                  Nos Clubs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Missions Section - Bento Grid Style */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-transparent to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">NOS VALEURS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Missions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les valeurs qui guident notre action au quotidien et inspirent notre engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {mission.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {mission.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-16 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
            
            <div className="relative z-10 text-center">
              <Sparkles className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" />
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Prêt à Faire la Différence ?
              </h2>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Rejoignez notre communauté de jeunes leaders engagés et participez à des projets qui changent des vies
              </p>
              <Link href="/join">
              <button className="group px-12 py-5 bg-white text-pink-600 font-bold rounded-full text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto">
                Devenir Membre
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}