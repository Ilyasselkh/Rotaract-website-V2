'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Calendar, Award, Heart, Globe, Lightbulb, HandHeart, BookOpen, Sparkles, ArrowRight, Star, MessageSquare, Quote } from 'lucide-react';

const AboutPage = () => {
  const [stats, setStats] = useState({
    membres: 0,
    evenements: 0,
    projets: 0,
    beneficiaires: 0
  });

  const [comments, setComments] = useState([]);

  // Charger les commentaires depuis localStorage
  useEffect(() => {
    const loadComments = () => {
      const storedComments = localStorage.getItem('rotaractComments');
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    };

    loadComments();
    
    // Écouter les changements de localStorage
    window.addEventListener('storage', loadComments);
    
    return () => window.removeEventListener('storage', loadComments);
  }, []);

  // Animation des statistiques
  useEffect(() => {
    const targets = {
      membres: 45,
      evenements: 28,
      projets: 12,
      beneficiaires: 500
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        membres: Math.floor(targets.membres * progress),
        evenements: Math.floor(targets.evenements * progress),
        projets: Math.floor(targets.projets * progress),
        beneficiaires: Math.floor(targets.beneficiaires * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const eventsInternes = [
    {
      title: "",
      image: "",
      description: "",
      gradient: "from-pink-100 to-rose-100"
    },
    {
      title: "Sortie à la ferme – Moment de convivialité et d’échange 🌾",
      image: "/images/Interne1.jpg",
      description: "Une journée conviviale à la ferme pour renforcer les liens entre membres et partager un moment de détente en plein air. 🌿",
      gradient: "from-rose-100 to-pink-100"
    },
    {
      title: "Assemblée Générale",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      description: "Réunions mensuelles pour planifier nos actions, partager nos idées et voter les projets à venir.",
      gradient: "from-pink-50 to-rose-50"
    }
  ];

  const eventsExternes = [
    {
      title: "Préparation pour la distribution des repas – Action solidaire du Rotaract 🤝",
      image: "/images/Externe1.jpg",
      description: "Préparation des repas dans une ambiance solidaire et joyeuse avant leur distribution aux personnes dans le besoin. 🍲",
      gradient: "from-rose-100 to-pink-100"
    },
    {
      title: "Journée de sensibilisation au cancer du sein – Octobre Rose 🌸",
      image: "/images/Cancer.jpg",
      description: "Nos membres se sont réunis pour soutenir la lutte contre le cancer du sein et promouvoir la sensibilisation à cette cause importante. 💗",
      gradient: "from-pink-100 to-rose-100"
    },
    {
      title: "Collecte de Sang",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80",
      description: "Organisation de campagnes de don de sang en partenariat avec les centres de transfusion locaux.",
      gradient: "from-rose-50 to-pink-50"
    }
  ];

  const missions = [
    {
      icon: <HandHeart className="w-10 h-10" />,
      title: "Service Communautaire",
      description: "Répondre aux besoins de nos communautés à travers des projets concrets et durables."
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Développement Personnel",
      description: "Favoriser l'épanouissement de nos membres par la formation et l'échange d'expériences."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Compréhension Internationale",
      description: "Promouvoir la paix et la compréhension entre les peuples à travers nos actions."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation Sociale",
      description: "Développer des solutions créatives aux défis sociaux et environnementaux actuels."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-100/20 to-rose-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Qu'est-ce que Rotaract */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-700">Découvrez Rotaract</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Qu&apos;est-ce que{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Rotaract
              </span>
              <span className="text-rose-400">?</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-pink-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le <strong className="text-rose-600">Rotaract</strong> est une organisation mondiale de jeunes âgés de 18 à 30 ans, 
                  parrainée par le Rotary International. Nous sommes des leaders émergents passionnés 
                  par le service communautaire et le développement personnel.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-rose-100">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre club réunit des jeunes professionnels et étudiants qui partagent la même vision : 
                  créer un impact positif dans nos communautés tout en développant nos compétences de 
                  leadership et en créant des liens durables.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-pink-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  À travers nos actions, nous incarnons les valeurs du Rotary International : intégrité, 
                  diversité, service et leadership.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-[3rem] blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 p-2 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                  <Image 
                    src="/images/QuiRotaract.jpg" 
                    alt="Rotaract Team"
                    fill
                    className="rounded-[2.5rem] object-cover shadow-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-pink-400 to-rose-500 text-white p-8 rounded-3xl shadow-2xl">
                <Award className="w-16 h-16 mb-3" />
                <p className="font-black text-2xl">Excellence</p>
                <p className="text-sm opacity-90 font-medium">dans le Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Dynamiques */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Notre Impact en{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Chiffres
              </span>
            </h2>
            <p className="text-lg text-gray-600">Des résultats concrets qui font la différence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                {stats.membres}+
              </div>
              <div className="text-gray-600 font-semibold">Membres Actifs</div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {stats.evenements}+
              </div>
              <div className="text-gray-600 font-semibold">Événements</div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                {stats.projets}+
              </div>
              <div className="text-gray-600 font-semibold">Projets Menés</div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {stats.beneficiaires}+
              </div>
              <div className="text-gray-600 font-semibold">Bénéficiaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commentaires Section */}
      {comments.length > 0 && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50/30 to-rose-50/30 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-2 rounded-full mb-6">
                <MessageSquare className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-700">Témoignages</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Ce qu&apos;ils disent de{" "}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  nous
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les expériences partagées par notre communauté
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comments.slice(0, 6).map((comment) => (
                <div key={comment.id} className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center opacity-50">
                    <Quote className="w-6 h-6 text-rose-500" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= comment.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Message */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-base line-clamp-4">
                    {comment.message}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t-2 border-pink-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{comment.name}</p>
                      <p className="text-sm text-gray-500">{comment.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Événements Internes */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-700">Pour nos membres</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Événements{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Internes
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des activités dédiées au développement et à la cohésion de notre équipe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsInternes.map((event, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-pink-50 hover:border-pink-200">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20 z-10`}></div>
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-rose-500 transition-colors">
    {event.title}
  </h3>
  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
  <button
    onClick={() => window.location.href = "/decouvrir"}
    className="flex items-center text-rose-500 font-semibold group-hover:gap-3 gap-2 transition-all hover:text-rose-600 cursor-pointer"
  >
    <span>En savoir plus</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements Externes */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50/50 to-rose-50/50 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full mb-6 shadow-md">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-700">Pour la communauté</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Événements{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Externes
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos actions au service de la communauté et de l&apos;environnement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsExternes.map((event, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-rose-50 hover:border-rose-200">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20 z-10`}></div>
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-rose-500 transition-colors">
    {event.title}
  </h3>
  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
  <button
    onClick={() => window.location.href = "/decouvrir"}
    className="flex items-center text-rose-500 font-semibold group-hover:gap-3 gap-2 transition-all hover:text-rose-600 cursor-pointer"
  >
    <span>Découvrir</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-700">Notre raison d&apos;être</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformer nos communautés et développer les leaders de demain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {missions.map((mission, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all text-white">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            {/* Bento Box Layout - Super Creative */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main CTA Card - Spans 2 columns */}
              <div className="lg:col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative h-full bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden">
                  {/* Animated shapes background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm font-bold text-white">Rejoins l&apos;aventure</span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                        Deviens un
                        <br />
                        <span className="text-pink-100">Rotaractien</span> 🚀
                      </h3>
                      
                      <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                        Rejoins une communauté de jeunes passionnés qui transforment le monde. 
                        Développe tes compétences, crée des liens et fais la différence.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button
  onClick={() => window.location.href = "/join"} // 🔗 remplace "/postuler" par la page de ton choix
  className="group bg-white text-rose-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
>
  <span>Postuler Maintenant</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards - Right Column */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-rose-500" />
                    </div>
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                    45+
                  </div>
                  <p className="text-gray-600 font-semibold">Membres actifs</p>
                  <p className="text-sm text-gray-500 mt-2">Prêts à t&apos;accueillir</p>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border-2 border-rose-100 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <Heart className="w-6 h-6 text-rose-500" />
                    </div>
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <p className="text-gray-700 font-semibold">Vies impactées</p>
                  <p className="text-sm text-gray-600 mt-2">Chaque année</p>
                </div>
              </div>
            </div>

            {/* Bottom Cards - Why Join */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-50 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Développe-toi</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Formations, workshops et opportunités de leadership pour booster ta carrière
                </p>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-50 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Crée du lien</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Réseau international de jeunes leaders et amitiés qui durent toute une vie
                </p>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-50 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <HandHeart className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Agis</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Projets concrets qui transforment vraiment la vie de nos communautés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;