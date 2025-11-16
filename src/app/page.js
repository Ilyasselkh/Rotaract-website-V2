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

  const projectsCount = useCountUp(50, 1000, 0, statsVisible);
  const countriesCount = useCountUp(15, 1000, 0, statsVisible);
  const beneficiariesCount = useCountUp(10000, 1000, 0, statsVisible);
  const membersCount = useCountUp(500, 1000, 0, floatingCardVisible);

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
        
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <div className="animate-fade-in-up" style={{ transform: `translateY(${scrollY * 1}px)` }}>
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

      {/* Quote Section with Modern Design */}
      <div className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-gradient"></div>
            
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '48px 48px'
                }}></div>
              </div>
              
              {/* Floating orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                  
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
                    &quot;Le service au-dessus de soi-même n&apos;est pas juste notre devise,
                  </p>
                  
                  <p className="text-3xl md:text-4xl lg:text-5xl font-black text-center leading-tight">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                      c&apos;est notre mode de vie
                    </span>
                    &quot;
                  </p>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
              </div>
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
                  src="/images/Jeunes.jpg"
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
                <button
  onClick={() => window.location.href = '/contact'}
  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
>
  Contactez-nous
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* CTA Section - Ultra Modern */}
      <div className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Animated gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-2xl transition duration-1000 animate-gradient"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
                <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-4000"></div>
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
              </div>
              
              {/* Main content */}
              <div className="relative z-10 px-8 py-20 md:px-16 md:py-24">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Icon with glow effect */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-full">
                        <Sparkles className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title with split animation effect */}
                  <div className="space-y-4 mb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                      Prêt à Faire
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                        la Différence ?
                      </span>
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Rejoignez notre communauté de jeunes leaders engagés et participez à des projets qui changent des vies
                  </p>
                  
                  {/* CTA Button with modern design */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/join">
                      <button className="group relative px-10 py-5 bg-white text-gray-900 font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-pink-500/50">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                          Devenir Membre
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                      </button>
                    </Link>
                    
                    <Link href="/about">
                      <button className="group px-10 py-5 backdrop-blur-xl bg-white/10 border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                        En savoir plus
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                  
                  {/* Values/Benefits bar */}
                  <div className="mt-16 pt-12 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <Heart className="w-8 h-8 text-pink-400" />
                        </div>
                        <p className="text-lg font-bold text-white mb-2">Impact Communautaire</p>
                        <p className="text-sm text-white/60">Créez un changement durable dans votre communauté</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <Users className="w-8 h-8 text-purple-400" />
                        </div>
                        <p className="text-lg font-bold text-white mb-2">Réseau International</p>
                        <p className="text-sm text-white/60">Connectez-vous avec des leaders du monde entier</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <Lightbulb className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-lg font-bold text-white mb-2">Développement Personnel</p>
                        <p className="text-sm text-white/60">Développez vos compétences de leadership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}